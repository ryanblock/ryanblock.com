@app
personal-site

@static
prune true

@http
get /robots.txt
get /topos/:name # Records req and redirects to S3 /topo/{proxy} (for now)
get /302/:redir

@tables
redirects
  id *string
  ts **string

@tables-streams
redirects

@plugins
regen
topo-route # Load a static topo file via APIG
redirects
architect/plugin-storage-public

@storage-public
topos
