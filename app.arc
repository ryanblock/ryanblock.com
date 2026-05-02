@app
personal-site

@static
prune true

@http
get /robots.txt
get /:code/:redir
get /302/:redir

@tables
redirects
  id *string
  ts **string

@plugins
regen
topo-route # Load a static topo file via APIG
redirects
architect/plugin-storage-public

@storage-public
topos
