``` 
$('#EditBE th span').each(function () {
                    if ($(this).hasClass('requiredMark')) {
                        var field_name = $(this).closest("th").find('label').text();
                        var value = $(this).closest("td").find('input[type=text]').val();
                        if (value == "") {
                            $(this).closest("td").find('label').text(field_name + "欄位是必要項")
                        }

                    }
                });

                $("#EditBE input[type=text]").each(function () {
                    if (this.value == "") {
                        var field_name = $(this).closest("tr").find('label').text();
                        field_name = field_name.replace(":", "");
                        var mark = $(this).parent("tr").find('span').hasClass('requiredMark');
                        if (mark == true) {
                            $(this).next("label").text(field_name + "欄位是必要項");

                        }
                    }
                });
``` 
