require('./bootstrap');
const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
ClassicEditor
/*el querySelector recibe el nombre del id del campo del textArea*/

.create(document.querySelector('#content_publication'))
.then(editor =>{
    console.log(editor);

})
.catch(error=> {
    console.error(error);
})
