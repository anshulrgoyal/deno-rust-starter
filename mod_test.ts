import { assertEquals } from "./test_deps.ts";
import { getHelloWorld } from "./mod.ts";

const decoder = new TextDecoder("utf-8")

Deno.test("hello world test",function test_get_hello_world() {
  const output=getHelloWorld()
  assertEquals(decoder.decode(output),"hello world" );
});




