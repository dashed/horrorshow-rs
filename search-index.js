var searchIndex = {};
searchIndex['horrorshow'] = {"items":[[0,"","horrorshow","# Horrorshow",null,null],[3,"Error","","",null,null],[12,"write","","",0,null],[12,"render","","",0,null],[3,"TemplateBuffer","","A template buffer. This is the type that gets passed to closures inside templates.",null,null],[3,"FnRenderer","","A template renderer. The `html! {}` macro returns a `FnRenderer`.",null,null],[3,"Raw","","Raw content marker.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"description","","",0,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"from","","",0,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"record_error","","",1,{"inputs":[{"name":"templatebuffer"},{"name":"e"}],"output":null}],[11,"write_raw","","Write a raw string to the template output.",1,{"inputs":[{"name":"templatebuffer"},{"name":"str"}],"output":null}],[11,"write_fmt","","Escape and write the formatted arguments to the template output.",1,{"inputs":[{"name":"templatebuffer"},{"name":"arguments"}],"output":null}],[11,"write_str","","Escape and write a string to the template output.",1,{"inputs":[{"name":"templatebuffer"},{"name":"str"}],"output":null}],[11,"as_writer","","Returns an escaping Write adapter.",1,{"inputs":[{"name":"templatebuffer"}],"output":{"name":"templatewriter"}}],[11,"as_raw_writer","","Returns a non-escaping Write adapter.",1,{"inputs":[{"name":"templatebuffer"}],"output":{"name":"rawtemplatewriter"}}],[11,"render_once","alloc::boxed","",2,{"inputs":[{"name":"box"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",2,{"inputs":[{"name":"box"}],"output":{"name":"usize"}}],[11,"render_once","","",2,{"inputs":[{"name":"box"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",2,{"inputs":[{"name":"box"}],"output":{"name":"usize"}}],[11,"render_mut","","",2,{"inputs":[{"name":"box"},{"name":"templatebuffer"}],"output":null}],[11,"render_once","","",2,{"inputs":[{"name":"box"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",2,{"inputs":[{"name":"box"}],"output":{"name":"usize"}}],[11,"render_mut","","",2,{"inputs":[{"name":"box"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",2,{"inputs":[{"name":"box"},{"name":"templatebuffer"}],"output":null}],[11,"new","horrorshow","",3,{"inputs":[{"name":"fnrenderer"},{"name":"f"}],"output":{"name":"self"}}],[11,"with_capacity","","",3,{"inputs":[{"name":"fnrenderer"},{"name":"usize"},{"name":"f"}],"output":{"name":"self"}}],[11,"render_once","","",3,{"inputs":[{"name":"fnrenderer"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",3,{"inputs":[{"name":"fnrenderer"}],"output":{"name":"usize"}}],[11,"render_mut","","",3,{"inputs":[{"name":"fnrenderer"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",3,{"inputs":[{"name":"fnrenderer"},{"name":"templatebuffer"}],"output":null}],[11,"fmt","","",3,{"inputs":[{"name":"fnrenderer"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"raw"}],"output":{"name":"raw"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"option"}}],[11,"lt","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"le","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"gt","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"ge","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"cmp","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"ordering"}}],[11,"eq","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"raw"},{"name":"raw"}],"output":{"name":"bool"}}],[11,"deref","","",4,{"inputs":[{"name":"raw"}],"output":{"name":"s"}}],[11,"new","","Mark as raw.",4,{"inputs":[{"name":"raw"},{"name":"s"}],"output":{"name":"raw"}}],[11,"render_once","","",4,{"inputs":[{"name":"raw"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",4,{"inputs":[{"name":"raw"}],"output":{"name":"usize"}}],[11,"render_mut","","",4,{"inputs":[{"name":"raw"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",4,{"inputs":[{"name":"raw"},{"name":"templatebuffer"}],"output":null}],[11,"render_once","collections::string","",5,{"inputs":[{"name":"string"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","",5,{"inputs":[{"name":"string"}],"output":{"name":"usize"}}],[11,"render_mut","","",5,{"inputs":[{"name":"string"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",5,{"inputs":[{"name":"string"},{"name":"templatebuffer"}],"output":null}],[11,"render_once","core::option","",6,{"inputs":[{"name":"option"},{"name":"templatebuffer"}],"output":null}],[11,"render_mut","","",6,{"inputs":[{"name":"option"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",6,{"inputs":[{"name":"option"},{"name":"templatebuffer"}],"output":null}],[11,"render_once","core::result","",7,{"inputs":[{"name":"result"},{"name":"templatebuffer"}],"output":null}],[11,"render_once","core::fmt","",8,{"inputs":[{"name":"arguments"},{"name":"templatebuffer"}],"output":null}],[11,"render_mut","","",8,{"inputs":[{"name":"arguments"},{"name":"templatebuffer"}],"output":null}],[11,"render","","",8,{"inputs":[{"name":"arguments"},{"name":"templatebuffer"}],"output":null}],[0,"prelude","horrorshow","Traits that should always be imported.",null,null],[8,"Template","","A template that can be rendered into something.",null,null],[11,"into_string","","Render this into a new String.",9,{"inputs":[{"name":"template"}],"output":{"name":"result"}}],[11,"write_to_string","","Render this into an existing String.",9,{"inputs":[{"name":"template"},{"name":"string"}],"output":{"name":"result"}}],[11,"write_to_fmt","","Render this into something that implements fmt::Write.",9,{"inputs":[{"name":"template"},{"name":"write"}],"output":{"name":"result"}}],[11,"write_to_io","","Render this into something that implements io::Write.",9,{"inputs":[{"name":"template"},{"name":"write"}],"output":{"name":"result"}}],[8,"RenderOnce","","Something that can be rendered once.",null,null],[10,"render_once","","Render this into a template buffer.",10,{"inputs":[{"name":"renderonce"},{"name":"templatebuffer"}],"output":null}],[11,"size_hint","","Returns a (very) rough estimate of how many bytes this Render will use.",10,{"inputs":[{"name":"renderonce"}],"output":{"name":"usize"}}],[8,"RenderMut","","Something that can be rendered by mutable reference.",null,null],[10,"render_mut","","Render this into a template buffer.",11,{"inputs":[{"name":"rendermut"},{"name":"templatebuffer"}],"output":null}],[8,"Render","","Something that can be rendered by reference.",null,null],[10,"render","","Render this into a template buffer.",12,{"inputs":[{"name":"render"},{"name":"templatebuffer"}],"output":null}],[8,"RenderBox","","Something that can be rendered once out of a box.",null,null],[14,"html!","","Crate a new html template",null,null],[14,"box_html!","","Crate a new owned html template.",null,null],[14,"raw!","","Mark a string as a raw. The string will not be rendered.",null,null],[14,"template!","","",null,null],[11,"into_string","","Render this into a new String.",9,{"inputs":[{"name":"template"}],"output":{"name":"result"}}],[11,"write_to_string","","Render this into an existing String.",9,{"inputs":[{"name":"template"},{"name":"string"}],"output":{"name":"result"}}],[11,"write_to_fmt","","Render this into something that implements fmt::Write.",9,{"inputs":[{"name":"template"},{"name":"write"}],"output":{"name":"result"}}],[11,"write_to_io","","Render this into something that implements io::Write.",9,{"inputs":[{"name":"template"},{"name":"write"}],"output":{"name":"result"}}],[11,"size_hint","","Returns a (very) rough estimate of how many bytes this Render will use.",10,{"inputs":[{"name":"renderonce"}],"output":{"name":"usize"}}]],"paths":[[3,"Error"],[3,"TemplateBuffer"],[3,"Box"],[3,"FnRenderer"],[3,"Raw"],[3,"String"],[4,"Option"],[4,"Result"],[3,"Arguments"],[8,"Template"],[8,"RenderOnce"],[8,"RenderMut"],[8,"Render"]]};
initSearch(searchIndex);
