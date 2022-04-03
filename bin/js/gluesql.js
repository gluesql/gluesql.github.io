import init, { Glue } from './dist/web/gluesql_js.js';

async function run() {
  await init();

  window.__gluesql_loaded__ = true;
}

export async function gluesql() {
  if (!window.__gluesql_loaded__) {
    await run();
  }

  return new Glue();
}
