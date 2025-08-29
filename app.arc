@app
personal-site

@static
prune true

@http
get /robots.txt
get /:code/:redir

@plugins
regen
topos-route
redirects
architect/plugin-storage-public

@storage-public
topos
