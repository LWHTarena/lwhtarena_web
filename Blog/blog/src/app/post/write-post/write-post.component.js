"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var fly_in_1 = require('../../animations/fly-in');
var WritePostComponent = (function () {
    function WritePostComponent() {
    }
    WritePostComponent.prototype.ngOnInit = function () {
    };
    WritePostComponent.prototype.fileInputChangeHandler = function () {
        var fileInput = document.getElementById('img_input');
        var inputValue = fileInput.value;
        if (!inputValue) {
            return;
        }
        //提交隐藏的表单，上传文件
        var fileForm = document.getElementById('file_upload_form');
        fileForm.action = "fileuploadurl";
        fileForm.onsubmit = function (event) {
            console.log(event);
            event.preventDefault();
            var file = fileInput.files[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', 'file_upload_URL.php');
            xhr.onload = function () {
                var json;
                if (xhr.status != 200) {
                    console.log('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location != 'string') {
                    console.log('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                console.log(json.location);
                fileInput.value = '';
            };
            xhr.send(formData);
        };
        fileForm.submit();
        fileInput.value = '';
    };
    WritePostComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /**
         *  【非常重要】
         *  关于TinyMCE的完整文档，请查看这里https://www.tinymce.com/docs/
         */
        tinymce.init({
            selector: '#post_editor',
            skin_url: '/assets/skins/lightgray',
            //menubar:false,
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
            ],
            toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
            image_advtab: true,
            codesample_content_css: '/assets/css/prism.css',
            //文件和图片上传相关的选项
            file_browser_callback_types: 'image',
            file_browser_callback: function (field_name, url, type, win) {
                console.log(type);
                console.log(type == 'image');
                if (type == 'image') {
                    var event_1 = new MouseEvent('click', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true
                    });
                    var fileInput = document.getElementById('img_input');
                    fileInput.dispatchEvent(event_1);
                }
            },
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    console.log(content);
                });
            }
        });
    };
    WritePostComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    WritePostComponent = __decorate([
        core_1.Component({
            selector: 'app-write-post',
            templateUrl: './write-post.component.html',
            styleUrls: ['./write-post.component.scss'],
            animations: [
                fly_in_1.flyIn
            ]
        })
    ], WritePostComponent);
    return WritePostComponent;
}());
exports.WritePostComponent = WritePostComponent;
//# sourceMappingURL=write-post.component.js.map