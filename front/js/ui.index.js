;(function(window){
    window.ui = window.ui || {};
    ui = {
        id: function(){
            return document.getElementById(arguments[0]);
        },
        tab: function(node){
            var that = this,
                obj = this.id(node),
                tag = obj.getElementsByTagName('a'),
                index = 0,
                content = null,
                j;

            for (var i = 0, len = tag.length; i < len; i++) {
                tag[i].index = i + 1;

                tag[i].onclick = function(){
                    for (j = 0; j < len; j++) {
                        tag[j].className = '';
                        content = that.id('content' + (j + 1));
                        if(content != null){
                            content.style.display = 'none';
                        } else {
                            alert('子菜单不存在');
                            return false;
                        }
                    }
                    that.id('content' + this.index).style.display = 'block';
                    this.className = 'cur';
                }

            }
            this.search();
        },
        search: function(){
            var that = this,
                wrap = that.id('s-search'),
                lab = wrap.getElementsByTagName('label'),
                content = null,
                j = 0;

            for (var i = 0, len = lab.length; i < len; i++) {
                lab[i].index = i + 1;
                lab[i].onclick = function(){
                    for (j = 0; j < len; j++) {
                        lab[j].className = '';
                        content = that.id('g-search' + (j + 1));
                        content.style.display = 'none';
                    }
                    that.id('g-search' + this.index).style.display = 'block';
                    this.className = 'cur';
                }

            }

        }
    }
})(window);
ui.tab('nav');
