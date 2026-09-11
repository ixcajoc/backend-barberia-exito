import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(
        private rolesService: RolesService
    ){}

    @Post()
    createRole(@Body() role: any){
        return this.rolesService.createRole(role);
    }

    @Get()
    getAllRoles(){
        return this.rolesService.getAllRoles();
    }

    @Get(':id')
    getRoleById(@Param('id') id:string){
        return this.rolesService.getRoleById(+id)//+id convierte el paremetro id de string a number
    }

    @Patch(':id')
    updateRole(@Param('id') id:string, @Body() role: any){
        return this.rolesService.updateRole(+id, role)
    }

    @Delete(':id')
    deleteRole(@Param('id') id: string){
        return this.rolesService.deleteRole(+id);
    }
    
}
