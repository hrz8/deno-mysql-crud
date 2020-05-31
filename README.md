# Simple Deno Restfull API using MySQL

## Quick Start

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

## App Info

### Authors

Hirzi Nurfakhrian

### Version

1.0.0