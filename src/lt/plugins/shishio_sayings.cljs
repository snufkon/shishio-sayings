(ns lt.plugins.shishio-sayings
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]))

(def sayings ["所詮この世は弱肉強食。強ければ生き弱ければ死ぬ"
              "油断？何のことだ？これは「余裕」というもんだ"
              "まだ夜も更けてねぇのに寝言ほざいてんじゃねーよ"
              "てめえのものさしで語るんじゃねェよ"
              "「君」ぐらいつけろよ。無礼な先輩だな"
              "かかってくるなら、この如何ともしがたい実力の差を、ちったぁ埋めてからかかってこい"
              "おい！なんだ？ホントに死んじまったのか？物足りねぇ！"
              "弱者は強者の糧（かて）となるべき。糧にすらならない弱者は存在する価値すらねえ"
              "生まれがどーのこーのじゃねェ、お前が弱いから悪いんだ"
              "この俺が直々にブッ殺してやる"])

(def current-saying (atom (rand-nth sayings)))

(defn change-to-another-saying []
  (reset! current-saying (rand-nth sayings)))

(defn to-shishio-saying [user-say]
  (subs (deref current-saying) 0 (count user-say)))

(def say (atom false))
(defn on-sayings? [] (deref say))
(defn on-sayings [] (reset! say true))
(defn off-sayings [] (reset! say false))

(cmd/command {:command :toggle-shishio-sayings
              :desc "Shishio sayings: Toggle shishio sayings"
              :exec (fn []
                      (if (on-sayings?)
                        (do
                          (off-sayings)
                          (notifos/set-msg! "Shishio sayings: OFF"))
                        (do
                          (on-sayings)
                          (notifos/set-msg! "Shishio sayings: ON"))))})

(defn shishio-sayings-behind-cursor []
  (when (on-sayings?)
    (let [cm (editor/->cm-ed (pool/last-active))
          cursor (.getCursor cm)
          from #js {:line (.-line cursor) :ch 0}
          user-say (.getRange cm from cursor)
          shishio-say (to-shishio-saying user-say)]
      (if (= (count user-say) 0)
        (change-to-another-saying))
      (when (not= user-say shishio-say)
        (.replaceRange cm shishio-say from cursor)))))

(cmd/command {:command :shishio-sayings-behind-cursor
              :desc "Shishio sayings: replace user input to shishio sayings"
              :exec shishio-sayings-behind-cursor})

