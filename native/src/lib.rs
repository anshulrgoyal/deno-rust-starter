use deno_core::plugin_api::Interface;
use deno_core::{Op, ZeroCopyBuf};

#[no_mangle]
pub fn deno_plugin_init(interface: &mut dyn Interface) {
    interface.register_op("hello_world", hello_world);
}

fn hello_world(_interface: &mut dyn Interface,
    _zero_copy: &mut [ZeroCopyBuf],
) -> Op {
    Op::Sync(Box::from("hello world".to_string().into_bytes().into_boxed_slice()))
}