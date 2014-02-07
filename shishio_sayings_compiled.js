if(!lt.util.load.provided_QMARK_('lt.plugins.shishio-sayings')) {
goog.provide('lt.plugins.shishio_sayings');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.shishio_sayings.sayings = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u6240\u8A6E\u3053\u306E\u4E16\u306F\u5F31\u8089\u5F37\u98DF\u3002\u5F37\u3051\u308C\u3070\u751F\u304D\u5F31\u3051\u308C\u3070\u6B7B\u306C","\u6CB9\u65AD\uFF1F\u4F55\u306E\u3053\u3068\u3060\uFF1F\u3053\u308C\u306F\u300C\u4F59\u88D5\u300D\u3068\u3044\u3046\u3082\u3093\u3060","\u307E\u3060\u591C\u3082\u66F4\u3051\u3066\u306D\u3047\u306E\u306B\u5BDD\u8A00\u307B\u3056\u3044\u3066\u3093\u3058\u3083\u306D\u30FC\u3088","\u3066\u3081\u3048\u306E\u3082\u306E\u3055\u3057\u3067\u8A9E\u308B\u3093\u3058\u3083\u306D\u30A7\u3088","\u300C\u541B\u300D\u3050\u3089\u3044\u3064\u3051\u308D\u3088\u3002\u7121\u793C\u306A\u5148\u8F29\u3060\u306A","\u304B\u304B\u3063\u3066\u304F\u308B\u306A\u3089\u3001\u3053\u306E\u5982\u4F55\u3068\u3082\u3057\u304C\u305F\u3044\u5B9F\u529B\u306E\u5DEE\u3092\u3001\u3061\u3063\u305F\u3041\u57CB\u3081\u3066\u304B\u3089\u304B\u304B\u3063\u3066\u3053\u3044","\u304A\u3044\uFF01\u306A\u3093\u3060\uFF1F\u30DB\u30F3\u30C8\u306B\u6B7B\u3093\u3058\u307E\u3063\u305F\u306E\u304B\uFF1F\u7269\u8DB3\u308A\u306D\u3047\uFF01","\u5F31\u8005\u306F\u5F37\u8005\u306E\u7CE7\uFF08\u304B\u3066\uFF09\u3068\u306A\u308B\u3079\u304D\u3002\u7CE7\u306B\u3059\u3089\u306A\u3089\u306A\u3044\u5F31\u8005\u306F\u5B58\u5728\u3059\u308B\u4FA1\u5024\u3059\u3089\u306D\u3048","\u751F\u307E\u308C\u304C\u3069\u30FC\u306E\u3053\u30FC\u306E\u3058\u3083\u306D\u30A7\u3001\u304A\u524D\u304C\u5F31\u3044\u304B\u3089\u60AA\u3044\u3093\u3060","\u3053\u306E\u4FFA\u304C\u76F4\u3005\u306B\u30D6\u30C3\u6BBA\u3057\u3066\u3084\u308B"], null);
lt.plugins.shishio_sayings.current_saying = cljs.core.atom.call(null,cljs.core.rand_nth.call(null,lt.plugins.shishio_sayings.sayings));
lt.plugins.shishio_sayings.change_to_another_saying = (function change_to_another_saying(){return cljs.core.reset_BANG_.call(null,lt.plugins.shishio_sayings.current_saying,cljs.core.rand_nth.call(null,lt.plugins.shishio_sayings.sayings));
});
lt.plugins.shishio_sayings.to_shishio_saying = (function to_shishio_saying(user_say){return cljs.core.subs.call(null,cljs.core.deref.call(null,lt.plugins.shishio_sayings.current_saying),0,cljs.core.count.call(null,user_say));
});
lt.plugins.shishio_sayings.say = cljs.core.atom.call(null,false);
lt.plugins.shishio_sayings.on_sayings_QMARK_ = (function on_sayings_QMARK_(){return cljs.core.deref.call(null,lt.plugins.shishio_sayings.say);
});
lt.plugins.shishio_sayings.on_sayings = (function on_sayings(){return cljs.core.reset_BANG_.call(null,lt.plugins.shishio_sayings.say,true);
});
lt.plugins.shishio_sayings.off_sayings = (function off_sayings(){return cljs.core.reset_BANG_.call(null,lt.plugins.shishio_sayings.say,false);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-shishio-sayings","toggle-shishio-sayings",4622408535),new cljs.core.Keyword(null,"desc","desc",1016984067),"Shishio sayings: Toggle shishio sayings",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.plugins.shishio_sayings.on_sayings_QMARK_.call(null)))
{lt.plugins.shishio_sayings.off_sayings.call(null);
return lt.objs.notifos.set_msg_BANG_.call(null,"Shishio sayings: OFF");
} else
{lt.plugins.shishio_sayings.on_sayings.call(null);
return lt.objs.notifos.set_msg_BANG_.call(null,"Shishio sayings: ON");
}
})], null));
lt.plugins.shishio_sayings.shishio_sayings_behind_cursor = (function shishio_sayings_behind_cursor(){if(cljs.core.truth_(lt.plugins.shishio_sayings.on_sayings_QMARK_.call(null)))
{var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var cursor = cm.getCursor();var from = {"ch": 0, "line": cursor.line};var user_say = cm.getRange(from,cursor);var shishio_say = lt.plugins.shishio_sayings.to_shishio_saying.call(null,user_say);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,user_say),0))
{lt.plugins.shishio_sayings.change_to_another_saying.call(null);
} else
{}
if(cljs.core.not_EQ_.call(null,user_say,shishio_say))
{return cm.replaceRange(shishio_say,from,cursor);
} else
{return null;
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"shishio-sayings-behind-cursor","shishio-sayings-behind-cursor",3803689868),new cljs.core.Keyword(null,"desc","desc",1016984067),"Shishio sayings: replace user input to shishio sayings",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.shishio_sayings.shishio_sayings_behind_cursor], null));
}

//# sourceMappingURL=shishio_sayings_compiled.js.map