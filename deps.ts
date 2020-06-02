import * as log from "https://deno.land/std/log/mod.ts";
import { Client } from 'https://deno.land/x/mysql/mod.ts';
import { ClientMySQL } from 'https://deno.land/x/nessie@v0.5.0/clients/ClientMySQL.ts';
import Dex from 'https://deno.land/x/dex@1.0.2/mod.ts';
import { Application, Router } from 'https://deno.land/x/oak@v5.0.0/mod.ts';
import { green, cyan, white, red } from 'https://deno.land/std@0.53.0/fmt/colors.ts';

const colors = {
  green,
  cyan,
  white,
  red
}

export {
  log,
  Client,
  ClientMySQL,
  Dex,
  Application,
  Router,
  colors
}
