@app
ryanblock

@aws
profile personal
region us-west-1

@domain
ryanblock.com

@http
get /
get /robots.txt
get /:page

@static
staging ryanblock.com-staging-static
production ryanblock.com-static
