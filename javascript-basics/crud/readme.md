
there is two types of exports 
1.Default export (for particularly one function)
Here creating one folder component ,and in that creating a file, in that file written a function ,
in that function return a html code by using back ticks  ({using back ticks u can written a html code})
after that written export default function_name.


where you want to import go to that file and in script tag mention type = "module";
and then write import ({which you like function name or any other name etc}) from "./folder_name/file_name

call with tag and then innerhtml = ({ funtion call or above name call})


2.Named export (multiple functions)

you can write export directly beside function or at down export { funciton_name,function name}

at particular file where you want to import 
import {function_name,function_name} from "./component/filename

innerhtml = funciton call





create read update delete
this are called crud operators or http operators

create -->  update 
read  -->  get 
post  -->  put,patch 
delete --> delete 


