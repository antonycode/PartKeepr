Ext.data.JsonP.Ext_util_MixedCollection({
  "tagname": "class",
  "name": "Ext.util.MixedCollection",
  "doc": "<p>\nRepresents a collection of a set of key and value pairs. Each key in the MixedCollection\nmust be unique, the same key cannot exist twice. This collection is ordered, items in the\ncollection can be accessed by index  or via the key. Newly added items are added to\nthe end of the collection. This class is similar to <a href=\"#/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a> however it\nis heavier and provides more functionality. Sample usage:\n<pre><code>var coll = new Ext.util.MixedCollection();\ncoll.add('key1', 'val1');\ncoll.add('key2', 'val2');\ncoll.add('key3', 'val3');\n\nconsole.log(coll.get('key1')); // prints 'val1'\nconsole.log(coll.indexOfKey('key3')); // prints 2\n</code></pre>\n\n<p>\nThe MixedCollection also has support for sorting and filtering of the values in the collection.\n<pre><code>var coll = new Ext.util.MixedCollection();\ncoll.add('key1', 100);\ncoll.add('key2', -100);\ncoll.add('key3', 17);\ncoll.add('key4', 0);\nvar biggerThanZero = coll.filterBy(function(value){\n    return value > 0;\n});\nconsole.log(biggerThanZero.getCount()); // prints 2\n</code></pre>\n</p>\n\n",
  "extends": "Ext.util.AbstractMixedCollection",
  "mixins": [
    "Ext.util.Sortable"
  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "allowFunctions",
      "member": "Ext.util.AbstractMixedCollection",
      "type": "Boolean",
      "doc": "<p>Specify <tt>true</tt> if the <a href=\"#/api/Ext.util.MixedCollection-method-addAll\" rel=\"Ext.util.MixedCollection-method-addAll\" class=\"docClass\">addAll</a>\nfunction should add function references to the collection. Defaults to\n<tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 62,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-cfg-allowFunctions"
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.util.MixedCollection-method-addListener\" rel=\"Ext.util.MixedCollection-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "MixedCollection",
      "member": "Ext.util.MixedCollection",
      "doc": "\n",
      "params": [
        {
          "type": "Boolean",
          "name": "allowFunctions",
          "doc": "<p>Specify <tt>true</tt> if the <a href=\"#/api/Ext.util.MixedCollection-method-addAll\" rel=\"Ext.util.MixedCollection-method-addAll\" class=\"docClass\">addAll</a>\nfunction should add function references to the collection. Defaults to\n<tt>false</tt>.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "keyFn",
          "doc": "<p>A function that can accept an item of the type(s) stored in this MixedCollection\nand return the key value for that item.  This is used when available to look up the key on items that\nwere passed without an explicit key parameter to a MixedCollection method.  Passing this parameter is\nequivalent to providing an implementation for the <a href=\"#/api/Ext.util.MixedCollection-method-getKey\" rel=\"Ext.util.MixedCollection-method-getKey\" class=\"docClass\">getKey</a> method.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
      "linenr": 1,
      "html_filename": "MixedCollection.html",
      "href": "MixedCollection.html#Ext-util-MixedCollection-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "add",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-add\" rel=\"Ext.util.MixedCollection-event-add\" class=\"docClass\">add</a> event when complete.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to associate with the item, or the new item.</p>\n\n\n<p>If a <a href=\"#/api/Ext.util.MixedCollection-method-getKey\" rel=\"Ext.util.MixedCollection-method-getKey\" class=\"docClass\">getKey</a> implementation was specified for this MixedCollection,\nor if the key of the stored items is in a property called <tt><b>id</b></tt>,\nthe MixedCollection will be able to <i>derive</i> the key for the new item.\nIn this case just pass the new item in this parameter.</p>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The item to add.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item added.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 69,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-add",
      "shortDoc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-add\" rel=\"Ext.util.MixedCollection-event-add\" class=\"docClass\">add</a> event when complete.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addAll",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Adds all elements of an Array or an Object to the collection.</p>\n",
      "params": [
        {
          "type": "Object/Array",
          "name": "objs",
          "doc": "<p>An Object containing properties which will be added\nto the collection, or an Array of values, each of which are added to the collection.\nFunctions references will be added to the collection if <code><a href=\"#/api/Ext.util.MixedCollection-cfg-allowFunctions\" rel=\"Ext.util.MixedCollection-cfg-allowFunctions\" class=\"docClass\">allowFunctions</a></code>\nhas been set to <tt>true</tt>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 166,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-addAll",
      "shortDoc": "<p>Adds all elements of an Array or an Object to the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
      "params": [
        {
          "type": "Object/String",
          "name": "o",
          "doc": "<p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "",
          "doc": "<p>[additional] Optional additional event names if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 452,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addEvents",
      "shortDoc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to listen for. May also be an object who's property names are event names. See</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n<li><b>element</b> : String<div class=\"sub-desc\"><b>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</b>\nThe name of a Component property which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which\nwill exist only after the Component is rendered. For example, to add a click listener to a Panel's body:\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></p>\n\n\n<p>When added in this way, the options available are the options applicable to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a></p>\n\n\n<p></div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myPanel.on('hide', this.handleClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple events. For example:\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>.\n<p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 271,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addListener",
      "shortDoc": "<p>Appends an event handler to this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n",
      "params": [
        {
          "type": "Observable/Element",
          "name": "item",
          "doc": "<p>The item to which to add a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object/String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "opt",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 155,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
      "shortDoc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n"
    },
    {
      "tagname": "method",
      "name": "capture",
      "member": "Ext.util.Observable",
      "doc": "<p>Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + standard signature of the event\n<b>before</b> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to capture events from.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call when an event is fired.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Observable firing the event.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 55,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-capture",
      "shortDoc": "Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + ..."
    },
    {
      "tagname": "method",
      "name": "clear",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Removes all items from the collection.  Fires the <a href=\"#/api/Ext.util.MixedCollection-event-clear\" rel=\"Ext.util.MixedCollection-event-clear\" class=\"docClass\">clear</a> event when complete.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 435,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-clear",
      "shortDoc": "<p>Removes all items from the collection.  Fires the <a href=\"#/api/Ext.util.MixedCollection-event-clear\" rel=\"Ext.util.MixedCollection-event-clear\" class=\"docClass\">clear</a> event when complete.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 383,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearListeners",
      "shortDoc": "<p>Removes all listeners for this object including the managed listeners</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearManagedListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all managed listeners for this object.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 412,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
      "shortDoc": "<p>Removes all managed listeners for this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clone",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Creates a shallow copy of this collection</p>\n",
      "params": [

      ],
      "return": {
        "type": "MixedCollection",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 727,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-clone",
      "shortDoc": "<p>Creates a shallow copy of this collection</p>\n"
    },
    {
      "tagname": "method",
      "name": "collect",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Collects unique values of a particular property in this MixedCollection</p>\n",
      "params": [
        {
          "type": "String",
          "name": "property",
          "doc": "<p>The property to collect on</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "root",
          "doc": "<p>Optional 'root' property to extract the first argument from. This is used mainly when\nsumming fields in records, where the fields are all stored inside the 'data' object</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "allowBlank",
          "doc": "<p>(optional) Pass true to allow null, undefined or empty string values</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The unique values</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 489,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-collect",
      "shortDoc": "<p>Collects unique values of a particular property in this MixedCollection</p>\n"
    },
    {
      "tagname": "method",
      "name": "contains",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns true if the collection contains the passed Object as an item.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The Object to look for in the collection.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the collection contains the Object as an item.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 417,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-contains",
      "shortDoc": "<p>Returns true if the collection contains the passed Object as an item.</p>\n"
    },
    {
      "tagname": "method",
      "name": "containsKey",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns true if the collection contains the passed Object as a key.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to look for in the collection.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the collection contains the Object as a key.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 426,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-containsKey",
      "shortDoc": "<p>Returns true if the collection contains the passed Object as a key.</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Executes the specified function once for every item in the collection, passing the following arguments:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>item</b> : Mixed<p class=\"sub-desc\">The collection item</p></li>\n<li><b>index</b> : Number<p class=\"sub-desc\">The item's index</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n\n<p>The function should return a boolean value. Returning false from the function will stop the iteration.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute for each item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current item in the iteration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 196,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-each",
      "shortDoc": "Executes the specified function once for every item in the collection, passing the following arguments:\n\n\nitem : Mixe..."
    },
    {
      "tagname": "method",
      "name": "eachKey",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Executes the specified function once for every key in the collection, passing each\nkey, and its associated item as the first two parameters.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute for each item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 221,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-eachKey",
      "shortDoc": "Executes the specified function once for every key in the collection, passing each\nkey, and its associated item as th..."
    },
    {
      "tagname": "method",
      "name": "enableBubble",
      "member": "Ext.util.Observable",
      "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default\nimplementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n//  Add functionality to Field&#39;s initComponent to enable the change event to bubble\ninitComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n    this.enableBubble('change');\n}),\n\n//  We know that we want Field&#39;s events to bubble directly to the FormPanel.\ngetBubbleTarget : function() {\n    if (!this.formPanel) {\n        this.formPanel = this.findParentByType('form');\n    }\n    return this.formPanel;\n}\n});\n\nvar myForm = new Ext.formPanel({\ntitle: 'User Details',\nitems: [{\n    ...\n}],\nlisteners: {\n    change: function() {\n        // Title goes red if form has been modified.\n        myForm.header.setStyle('color', 'red');\n    }\n}\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String/Array",
          "name": "events",
          "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 554,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-enableBubble",
      "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present...."
    },
    {
      "tagname": "method",
      "name": "filter",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Filters the objects in this collection by a set of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a>s, or by a single\nproperty/value pair with optional parameters for substring matching and case sensitivity. See\n<a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> for an example of using Filter objects (preferred). Alternatively,\nMixedCollection can be easily filtered by property like this:</p>\n\n\n<pre><code>//create a simple store with a few people defined\nvar people = new Ext.util.MixedCollection();\npeople.addAll([\n    {id: 1, age: 25, name: 'Ed'},\n    {id: 2, age: 24, name: 'Tommy'},\n    {id: 3, age: 24, name: 'Arne'},\n    {id: 4, age: 26, name: 'Aaron'}\n]);\n\n//a new MixedCollection containing only the items where age == 24\nvar middleAged = people.filter('age', 24);\n</code></pre>\n\n",
      "params": [
        {
          "type": "Array/String",
          "name": "property",
          "doc": "<p>A property on your objects, or an array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n",
          "optional": false
        },
        {
          "type": "String/RegExp",
          "name": "value",
          "doc": "<p>Either string that the property values\nshould start with or a RegExp to test against the property</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "anyMatch",
          "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "caseSensitive",
          "doc": "<p>(optional) True for case sensitive comparison (defaults to False).</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "MixedCollection",
        "doc": "<p>The new filtered collection</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 566,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-filter",
      "shortDoc": "Filters the objects in this collection by a set of Filters, or by a single\nproperty/value pair with optional paramete..."
    },
    {
      "tagname": "method",
      "name": "filterBy",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Filter by a function. Returns a <i>new</i> collection that has been filtered.\nThe passed function will be called with each object in the collection.\nIf the function returns true, the value is included otherwise it is filtered.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to be called, it will receive the args o (the object), k (the key)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this MixedCollection.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "MixedCollection",
        "doc": "<p>The new filtered collection</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 630,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-filterBy",
      "shortDoc": "Filter by a function. Returns a new collection that has been filtered.\nThe passed function will be called with each o..."
    },
    {
      "tagname": "method",
      "name": "findBy",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns the first item in the collection which elicits a true return value from the\npassed selection function.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The selection function to execute for each item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The first item in the collection which returned true from the selection function.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 238,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findBy",
      "shortDoc": "<p>Returns the first item in the collection which elicits a true return value from the\npassed selection function.</p>\n"
    },
    {
      "tagname": "method",
      "name": "findIndex",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Finds the index of the first matching object in this collection by a specific property/value.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "property",
          "doc": "<p>The name of a property on your objects.</p>\n",
          "optional": false
        },
        {
          "type": "String/RegExp",
          "name": "value",
          "doc": "<p>A string that the property values\nshould start with or a RegExp to test against the property.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "start",
          "doc": "<p>(optional) The index to start searching at (defaults to 0).</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "anyMatch",
          "doc": "<p>(optional) True to match any part of the string, not just the beginning.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "caseSensitive",
          "doc": "<p>(optional) True for case sensitive comparison.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The matched index or -1</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 657,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findIndex",
      "shortDoc": "<p>Finds the index of the first matching object in this collection by a specific property/value.</p>\n"
    },
    {
      "tagname": "method",
      "name": "findIndexBy",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Find the index of the first matching object in this collection by a function.\nIf the function returns <i>true</i> it is considered a match.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to be called, it will receive the args o (the object), k (the key).</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this MixedCollection.</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "start",
          "doc": "<p>(optional) The index to start searching at (defaults to 0).</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The matched index or -1</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 677,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findIndexBy",
      "shortDoc": "Find the index of the first matching object in this collection by a function.\nIf the function returns true it is cons..."
    },
    {
      "tagname": "method",
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.util.MixedCollection-method-enableBubble\" rel=\"Ext.util.MixedCollection-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to fire.</p>\n",
          "optional": false
        },
        {
          "type": "Object...",
          "name": "args",
          "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 232,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-fireEvent",
      "shortDoc": "Fires the specified event with the passed parameters (minus the event name).\n\n\nAn event may be set to bubble up an Ob..."
    },
    {
      "tagname": "method",
      "name": "first",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns the first item in the collection.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>the first item in the collection..</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 448,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-first",
      "shortDoc": "<p>Returns the first item in the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns the item associated with the passed key OR index.\nKey has priority over index.  This is the equivalent\nof calling <a href=\"#/api/Ext.util.MixedCollection--key\" rel=\"Ext.util.MixedCollection--key\" class=\"docClass\">key</a> first, then if nothing matched calling <a href=\"#/api/Ext.util.MixedCollection-method-getAt\" rel=\"Ext.util.MixedCollection-method-getAt\" class=\"docClass\">getAt</a>.</p>\n",
      "params": [
        {
          "type": "String/Number",
          "name": "key",
          "doc": "<p>The key or index of the item.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>If the item is found, returns the item.  If the item was not found, returns <tt>undefined</tt>.\nIf an item was found, but is a Class, returns <tt>null</tt>.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 384,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-get",
      "shortDoc": "Returns the item associated with the passed key OR index.\nKey has priority over index.  This is the equivalent\nof cal..."
    },
    {
      "tagname": "method",
      "name": "getAt",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns the item at the specified index.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index of the item.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item at the specified index.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 399,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getAt",
      "shortDoc": "<p>Returns the item at the specified index.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getByKey",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns the item associated with the passed key.</p>\n",
      "params": [
        {
          "type": "String/Number",
          "name": "key",
          "doc": "<p>The key of the item.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item associated with the passed key.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 408,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getByKey",
      "shortDoc": "<p>Returns the item associated with the passed key.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getCount",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns the number of items in the collection.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>the number of items in the collection.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 358,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getCount",
      "shortDoc": "<p>Returns the number of items in the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getKey",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>MixedCollection has a generic way to fetch keys if you implement getKey.  The default implementation\nsimply returns <b><code>item.id</code></b> but you can provide your own implementation\nto return a different value as in the following examples:</p>\n\n<pre><code>// normal way\nvar mc = new Ext.util.MixedCollection();\nmc.add(someEl.dom.id, someEl);\nmc.add(otherEl.dom.id, otherEl);\n//and so on\n\n// using getKey\nvar mc = new Ext.util.MixedCollection();\nmc.getKey = function(el){\n   return el.dom.id;\n};\nmc.add(someEl);\nmc.add(otherEl);\n\n// or via the constructor\nvar mc = new Ext.util.MixedCollection(false, function(el){\n   return el.dom.id;\n});\nmc.add(someEl);\nmc.add(otherEl);\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "item",
          "doc": "<p>The item for which to find the key.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The key for the passed item.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 103,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getKey",
      "shortDoc": "MixedCollection has a generic way to fetch keys if you implement getKey.  The default implementation\nsimply returns i..."
    },
    {
      "tagname": "method",
      "name": "getRange",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns a range of items in this collection</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "startIndex",
          "doc": "<p>(optional) The starting index. Defaults to 0.</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "endIndex",
          "doc": "<p>(optional) The ending index. Defaults to the last item.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>An array of items</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 536,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getRange",
      "shortDoc": "<p>Returns a range of items in this collection</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to check for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the event is being listened for, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 480,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-hasListener",
      "shortDoc": "<p>Checks to see if this object has any listeners for a specified event</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOf",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns index within the collection of the passed Object.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The item to find the index of.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>index of the item. Returns -1 if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 366,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-indexOf",
      "shortDoc": "<p>Returns index within the collection of the passed Object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOfKey",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns index within the collection of the passed key.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to find the index of.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>index of the key.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 375,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-indexOfKey",
      "shortDoc": "<p>Returns index within the collection of the passed key.</p>\n"
    },
    {
      "tagname": "method",
      "name": "initSortable",
      "member": "Ext.util.Sortable",
      "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 37,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
      "shortDoc": "Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own in..."
    },
    {
      "tagname": "method",
      "name": "insert",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Inserts an item at the specified index in the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-add\" rel=\"Ext.util.MixedCollection-event-add\" class=\"docClass\">add</a> event when complete.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index to insert the item at.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to associate with the new item, or the item itself.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>(optional) If the second parameter was a key, the new item.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item inserted.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 268,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-insert",
      "shortDoc": "<p>Inserts an item at the specified index in the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-add\" rel=\"Ext.util.MixedCollection-event-add\" class=\"docClass\">add</a> event when complete.</p>\n"
    },
    {
      "tagname": "method",
      "name": "last",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Returns the last item in the collection.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>the last item in the collection..</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 456,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-last",
      "shortDoc": "<p>Returns the last item in the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "observe",
      "member": "Ext.util.Observable",
      "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
      "params": [
        {
          "type": "Function",
          "name": "c",
          "doc": "<p>The class constructor to make observable.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "listeners",
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.util.MixedCollection-method-addListener\" rel=\"Ext.util.MixedCollection-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 69,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-observe",
      "shortDoc": "Sets observability on the passed class constructor.\n\nThis makes any event fired on any instance of the passed class a..."
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.util.MixedCollection-method-addListener\" rel=\"Ext.util.MixedCollection-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event to listen for</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 616,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-on",
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.util.MixedCollection-method-addListener\" rel=\"Ext.util.MixedCollection-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "relayEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "origin",
          "doc": "<p>The Observable whose events this object is to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "events",
          "doc": "<p>Array of event names to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "prefix",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 520,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-relayEvents",
      "shortDoc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "releaseCapture",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to release</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 46,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
      "shortDoc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "remove",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Remove an item from the collection.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The item to remove.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item removed or false if no item was removed.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 302,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-remove",
      "shortDoc": "<p>Remove an item from the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAll",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Remove all items in the passed array from the collection.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "items",
          "doc": "<p>An array of items to be removed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>this object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 311,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAll",
      "shortDoc": "<p>Remove all items in the passed array from the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAt",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Remove an item from a specified index in the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-remove\" rel=\"Ext.util.MixedCollection-event-remove\" class=\"docClass\">remove</a> event when complete.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index within the collection of the item to remove.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item removed or false if no item was removed.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 324,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAt",
      "shortDoc": "<p>Remove an item from a specified index in the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-remove\" rel=\"Ext.util.MixedCollection-event-remove\" class=\"docClass\">remove</a> event when complete.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAtKey",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Removed an item associated with the passed key fom the collection.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key of the item to remove.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item removed or false if no item was removed.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 349,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAtKey",
      "shortDoc": "<p>Removed an item associated with the passed key fom the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.util.MixedCollection-method-addListener\" rel=\"Ext.util.MixedCollection-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 352,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeListener",
      "shortDoc": "<p>Removes an event handler.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.util.MixedCollection--mon\" rel=\"Ext.util.MixedCollection--mon\" class=\"docClass\">mon</a> method.</p>\n",
      "params": [
        {
          "type": "Observable|Element",
          "name": "item",
          "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object|String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 196,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.util.MixedCollection--mon\" rel=\"Ext.util.MixedCollection--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "reorder",
      "member": "Ext.util.MixedCollection",
      "doc": "<p>Reorders each of the items based on a mapping from old index to new index. Internally this\njust translates into a sort. The 'sort' event is fired whenever reordering has occured.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "mapping",
          "doc": "<p>Mapping from old item index to new item index</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
      "linenr": 151,
      "html_filename": "MixedCollection.html",
      "href": "MixedCollection.html#Ext-util-MixedCollection-method-reorder",
      "shortDoc": "Reorders each of the items based on a mapping from old index to new index. Internally this\njust translates into a sor..."
    },
    {
      "tagname": "method",
      "name": "replace",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Replaces an item in the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-replace\" rel=\"Ext.util.MixedCollection-event-replace\" class=\"docClass\">replace</a> event when complete.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key associated with the item to replace, or the replacement item.</p>\n\n\n<p>If you supplied a <a href=\"#/api/Ext.util.MixedCollection-method-getKey\" rel=\"Ext.util.MixedCollection-method-getKey\" class=\"docClass\">getKey</a> implementation for this MixedCollection, or if the key\nof your stored items is in a property called <tt><b>id</b></tt>, then the MixedCollection\nwill be able to <i>derive</i> the key of the replacement item. If you want to replace an item\nwith one having the same key value, then just pass the replacement item in this parameter.</p>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>{Object} o (optional) If the first parameter passed was a key, the item to associate\nwith that key.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The new item.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 135,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-replace",
      "shortDoc": "<p>Replaces an item in the collection. Fires the <a href=\"#/api/Ext.util.MixedCollection-event-replace\" rel=\"Ext.util.MixedCollection-event-replace\" class=\"docClass\">replace</a> event when complete.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.util.MixedCollection-method-suspendEvents\" rel=\"Ext.util.MixedCollection-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 502,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
      "shortDoc": "Resume firing events. (see suspendEvents)\nIf events were suspended using the queueSuspended parameter, then all\nevent..."
    },
    {
      "tagname": "method",
      "name": "sort",
      "member": "Ext.util.Sortable",
      "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates the actual\nsorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n     </code></pre>\n\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n\n",
      "params": [
        {
          "type": "String|Array",
          "name": "sorters",
          "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of sorter configurations.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "direction",
          "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "where",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "doSort",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 59,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-method-sort",
      "shortDoc": "Sorts the data in the Store by one or more of its properties. Example usage:\n\n\n//sort by a single field\nmyStore.sort(..."
    },
    {
      "tagname": "method",
      "name": "sortBy",
      "member": "Ext.util.MixedCollection",
      "doc": "<p>Sorts the collection by a single sorter function</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "sorterFn",
          "doc": "<p>The function to sort by</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
      "linenr": 112,
      "html_filename": "MixedCollection.html",
      "href": "MixedCollection.html#Ext-util-MixedCollection-method-sortBy",
      "shortDoc": "<p>Sorts the collection by a single sorter function</p>\n"
    },
    {
      "tagname": "method",
      "name": "sortByKey",
      "member": "Ext.util.MixedCollection",
      "doc": "<p>Sorts this collection by <b>key</b>s.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "direction",
          "doc": "<p>(optional) 'ASC' or 'DESC'. Defaults to 'ASC'.</p>\n",
          "optional": true
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>(optional) Comparison function that defines the sort order.\nDefaults to sorting by case insensitive string.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
      "linenr": 191,
      "html_filename": "MixedCollection.html",
      "href": "MixedCollection.html#Ext-util-MixedCollection-method-sortByKey",
      "shortDoc": "<p>Sorts this collection by <b>key</b>s.</p>\n"
    },
    {
      "tagname": "method",
      "name": "sum",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Collects all of the values of the given property and returns their sum</p>\n",
      "params": [
        {
          "type": "String",
          "name": "property",
          "doc": "<p>The property to sum by</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "root",
          "doc": "<p>Optional 'root' property to extract the first argument from. This is used mainly when\nsumming fields in records, where the fields are all stored inside the 'data' object</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "start",
          "doc": "<p>(optional) The record index to start at (defaults to <tt>0</tt>)</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "end",
          "doc": "<p>(optional) The record index to end at (defaults to <tt>-1</tt>)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The total</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 464,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-sum",
      "shortDoc": "<p>Collects all of the values of the given property and returns their sum</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.util.MixedCollection-method-resumeEvents\" rel=\"Ext.util.MixedCollection-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.util.MixedCollection-method-resumeEvents\" rel=\"Ext.util.MixedCollection-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 490,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.util.MixedCollection-method-resumeEvents\" rel=\"Ext.util.MixedCollection-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.util.MixedCollection-method-removeListener\" rel=\"Ext.util.MixedCollection-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.util.MixedCollection-method-addListener\" rel=\"Ext.util.MixedCollection-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 608,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-un",
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.util.MixedCollection-method-removeListener\" rel=\"Ext.util.MixedCollection-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "defaultSortDirection",
      "member": "Ext.util.Sortable",
      "type": "String",
      "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 20,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection"
    },
    {
      "tagname": "property",
      "name": "isSortable",
      "member": "Ext.util.Sortable",
      "type": "Boolean",
      "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 13,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-isSortable"
    },
    {
      "tagname": "property",
      "name": "sortRoot",
      "member": "Ext.util.Sortable",
      "type": "String",
      "doc": "<p>The property in each item that contains the data to sort. (defaults to null)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 31,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-sortRoot"
    },
    {
      "tagname": "property",
      "name": "sorters",
      "member": "Ext.util.Sortable",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 45,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-sorters"
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "add",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Fires when an item is added to the collection.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index at which the item was added.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The item added.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key associated with the added item.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 26,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-add",
      "shortDoc": "<p>Fires when an item is added to the collection.</p>\n"
    },
    {
      "tagname": "event",
      "name": "clear",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Fires when the collection is cleared.</p>\n",
      "params": [

      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 20,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-clear",
      "shortDoc": "<p>Fires when the collection is cleared.</p>\n"
    },
    {
      "tagname": "event",
      "name": "remove",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Fires when an item is removed from the collection.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The item being removed.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "key",
          "doc": "<p>(optional) The key associated with the removed item.</p>\n",
          "optional": true
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 44,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-remove",
      "shortDoc": "<p>Fires when an item is removed from the collection.</p>\n"
    },
    {
      "tagname": "event",
      "name": "replace",
      "member": "Ext.util.AbstractMixedCollection",
      "doc": "<p>Fires when an item is replaced in the collection.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>he key associated with the new added.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "old",
          "doc": "<p>The item being replaced.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "new",
          "doc": "<p>The new item.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
      "linenr": 35,
      "html_filename": "AbstractMixedCollection.html",
      "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-replace",
      "shortDoc": "<p>Fires when an item is replaced in the collection.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
  "linenr": 1,
  "html_filename": "MixedCollection.html",
  "href": "MixedCollection.html#Ext-util-MixedCollection",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.util.AbstractMixedCollection"
  ],
  "subclasses": [
    "Ext.form.CheckboxManager",
    "Ext.form.RadioManager",
    "Ext.data.Errors",
    "Ext.data.StoreManager",
    "Ext.draw.CompositeSprite"
  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Sortable",
    "Ext.util.Observable"
  ]
});