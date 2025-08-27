@app
personal-site

@static
prune true

@http
get /robots.txt

@plugins
regen
topos-route
architect/plugin-storage-public

@storage-public
topos
