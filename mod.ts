let path=""
if (Deno.build.os==="linux"){
  path="./native/target/debug/libnative.so"
} else if (Deno.build.os==="windows"){
  path="./native/target/debug/native.dll"
} else if (Deno.build.os==="darwin"){
  path="./native/target/debug/libnative.dylib"
}
const rid = Deno.openPlugin(path);
//@ts-Expect-Error
const { hello_world } = (Deno as any).core.ops();

/** Returns `Hello World` in bold */
export function getHelloWorld(): ArrayBuffer {
  return (Deno as any).core.dispatch(hello_world)
}
