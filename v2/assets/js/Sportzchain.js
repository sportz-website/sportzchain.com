               var form_submitted = "0";
                $(document).ready(function(){$.validator.addMethod("lettersonly", function(value, element) {
                    return this.optional(element) || /^[a-z]+$/i.test(value);
                });
                $('#Sportzchain_1648480510').validate({ ignore: "",
                    errorPlacement: function(error, element) {
                            if (element.attr("type") == "checkbox") {
                                error.insertAfter(element.closest(".checkbox"));
                            } else if (element.attr("type") == "radio") {
                                error.insertAfter(element.closest(".radio"));
                            } else if (element.attr("input_type") == "rating") {
                                error.insertAfter(element.closest(".error_place"));
                            } else if (element.parent(".input-group").length) {
                                error.insertAfter(element.parent());
                            }else if ( element.hasClass("dropzone_input") ) {
                                error.insertAfter(element.closest(".dropzone"));
                            }else if ( element.hasClass("select2-hidden-accessible") ) {
                                error.insertAfter(element.parent().find("span.select2-container"));
                            } else {
                                error.insertAfter(element);
                            }
                        },
                    highlight: function(element) {
                        $(element).closest(".form-group").addClass("has-error_Sportzchain_1648480510");
                    },
                    unhighlight: function(element) {
                        $(element).closest(".form-group").removeClass("has-error_Sportzchain_1648480510");
                    },
                    errorClass: "error-class_Sportzchain_1648480510",
                    submitHandler: function (form) {
                        var form_data = $(form).serialize();
                        if( typeof uploadedFiles !== "undefined" && uploadedFiles.length){
                            form_data += "&attachments="  + uploadedFiles.join(",") ;
                        }
                        var $btn = $(form).find(".send_email").button("loading");
                        $.ajax({
                            type: $('#Sportzchain_1648480510').attr('method'),
                            url: $('#Sportzchain_1648480510').attr('action'),
                            data: form_data,
                            dataType: "json",
                            success: function (result) {
                                $btn.button("reset");if(result.success == 1){
                                    if (typeof Sportzchain_success_true === "function") {
                                        Sportzchain_success_true(result);
                                    }
                                    if( result.redirect == 1 ){
                                        window.location = result.url;
                                    } else {
                                        var html = '<div class="alert alert-dismissable alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' + result.msg + '</div>';
                                        $(form).find( "#msg" ).html(html);
                                        form_submitted = "1"
                                        $(form)[0].reset();
                                        if($(form).find("textarea.summernote").length > 0) {
                                            $(form).find("textarea.summernote").each( function() {
                                                $(this).summernote("code", "");
                                            });
                                        }
                                        if(typeof uploadedFiles !== "undefined"){
                                            $(".dropzone").each( function(){
                                                 Dropzone.forElement(this).removeAllFiles();
                                            });
                                            form_submitted = "0"
                                        }
                                    }
                                } else {
                                    if (typeof Sportzchain_success_false === "function") {
                                        Sportzchain_success_false(result);
                                    }
                                    var html = '<div class="alert alert-dismissable alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' + result.msg + '</div>';
                                    $(form).find( "#msg" ).html(html);
                                }}
                        });
                        return false;
                    }
                });
            });
        