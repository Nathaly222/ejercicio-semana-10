'use strict'
let  url= 'https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link';
let position = url.indexOf('/d/');
let end = url.indexOf('/v');
let id = url.slice(position+3,end)
alert(id);
