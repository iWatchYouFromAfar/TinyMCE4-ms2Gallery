tinymce.PluginManager.add('ms2Gallery', function (editor, url) {
    // Add a button that opens a window
    editor.addButton('ms2Gallery', {
        text: 'Вставить галерею',
        icon: false,
        onclick: function () {
            // Open window
            editor.windowManager.open({
                title: 'Параметры галереи',
                minWidth: 500,
                body: [
                    {
                        type: 'textbox',
                        name: 'parent',
                        label: 'Parent ID',
                        tooltip: 'Укажите ID родителей через запятую',
                    },
                    {
                        type: 'textbox',
                        name: 'resource',
                        label: 'Resource ID',
                        tooltip: 'Укажите ID ресурсов через запятую',
                    },
                    {
                        type: 'textbox',
                        name: 'limit',
                        label: 'Limit',
                        tooltip: 'Укажите лимит выборки изображений',
                    },
                    {
                        type: 'textbox',
                        name: 'tags',
                        label: 'Теги (через запятую)',
                        tooltip: 'Укажите список тегов, разделённых запятыми, для вывода изображений.',
                        multiline: true,
                        minHeight: 50,
                    },
                    {
                        type: 'container',
                        minHeight: 40,
                        items: [
                            {
                                type: 'container',
                                html: '<div style="position: absolute;right: 0;">Автор iWatchYouFromAfar</div>'
                            },
                            {
                                type: 'container',
                                html: '<a href="https://webinmind.ru/author" target="_blank" style="position: absolute;right: 0;bottom: 0;color: green;cursor: pointer;">Сказать спасибо</a>'
                            },
                        ]
                    },
                ],
                onsubmit: function (e) {

                    // Check parent value
                    if (e.data.parent.length != 0) {
                        var parent = '&parent=`' + e.data.parent + '`';
                    }
                    else {
                        var parent = '';
                    }

                    // Check resource value
                    if (e.data.resource.length != 0) {
                        var resource = ' &resource=`' + e.data.resource + '`';
                    }
                    else {
                        var resource = '';
                    }

                    // Check limit value
                    if (e.data.limit.length != 0) {
                        var limit = ' &limit=`' + e.data.limit + '`';
                    }
                    else {
                        var limit = '';
                    }

                    // Check tags value
                    if (e.data.tags.length != 0) {
                        var tags = ' &tags=`' + e.data.tags + '`';
                    }
                    else {
                        var tags = '';
                    }

                    // Insert content when the window form is submitted
                    editor.insertContent('' +
                        '[[!ms2Gallery? '
                        + parent
                        + resource
                        + limit
                        + tags
                        + ']]'
                    );
                }
            });
        }
    });

    // Adds a menu item to the tools menu
    editor.addMenuItem('ms2Gallery', {
        text: 'About ms2Gallery',
        context: 'tools',
        onclick: function () {
            // Open window with a specific url
            editor.windowManager.open({
                title: 'TinyMCE site',
                url: 'https://webinmind.ru/tinymce/v4/plugins/ms2gallery',
                width: 1200,
                height: 600,
                buttons: [{
                    text: 'Close',
                    onclick: 'close'
                }]
            });
        }
    });
});