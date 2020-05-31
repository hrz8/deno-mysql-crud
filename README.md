# Simple Deno Restfull API using MySQL

## Quick Start

### Requirements
```
Deno >= 1.0.3
```

### Install Denon
```sh
$ deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

### Install Velociraptor

```sh
$ deno install --allow-read --allow-write --allow-env --allow-run -n vr https://deno.land/x/velociraptor/cli.ts
```

### Run Database

```sh
$ vr db:create
$ vr db:migrate
```

### Run Server with Denon
```sh
$ vr server:dev
```

### Run Server
```sh
$ vr server:run
```

### Run with VSCode Debugger
`Ctrl+Shift+D` > Select `Deno` > Happy Debugging!

## Usage

### Endpoints
```
GET      /api/authors         # get authors list
GET      /api/authors/:id     # get author data by id
POST     /api/authors         # create new author
PUT      /api/authors/:id     # update author data by id
```

## App Info

### Authors

Hirzi Nurfakhrian

### Version

1.0.0