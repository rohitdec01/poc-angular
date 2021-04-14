import { state } from "@angular/animations"
import { TypeCheckCompiler } from "@angular/compiler/src/view_compiler/type_check_compiler"

//Note: This is the main applicatoin state. 
// All other individual state are defined in the feature module and extend this app state TypeCheckCompiler.
export interface state { 
    users: any;
}