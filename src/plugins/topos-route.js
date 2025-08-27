module.exports = {
  deploy: {
    start: async ({ cloudformation }) => {
      cloudformation.Resources.HTTP.Properties.DefinitionBody.paths['/topos/{proxy+}'] = {
        get: {
          'x-amazon-apigateway-integration': {
            payloadFormatVersion: '1.0',
            type: 'http_proxy',
            httpMethod: 'GET',
            uri: {
              'Fn::Sub': [
                'https://${topos}.s3.${AWS::Region}.amazonaws.com/{proxy}',
                {
                  topos: {
                    Ref: 'ToposBucket',
                  },
                },
              ],
            },
            connectionType: 'INTERNET',
            timeoutInMillis: 30000,
          },
        },
      }
      return cloudformation
    },
  },
}
