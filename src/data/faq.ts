export type FaqCategory =
  | "trial"
  | "admission"
  | "fee"
  | "class";

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
};

export const faqCategories: { id: FaqCategory; label: string }[] = [
  { id: "trial", label: "体験セミナー" },
  { id: "admission", label: "入学" },
  { id: "fee", label: "料金" },
  { id: "class", label: "授業" },
];

export const faqItems: FaqItem[] = [
  {
    id: "trial-1",
    category: "trial",
    question: "体験セミナーは無料ですか？",
    answer:
      "はい、初めての方を対象にした無料体験セミナーをご用意しています。所要時間は約60分で、ストレッチの基本理論と簡単な実技を体験いただけます。",
  },
  {
    id: "trial-2",
    category: "trial",
    question: "体験セミナーの予約方法を教えてください。",
    answer:
      "本サイトのお問い合わせフォーム、またはお電話（050-5491-2929）からご予約いただけます。校舎の空き状況に応じて、平日・休日とも対応可能です。",
  },
  {
    id: "trial-3",
    category: "trial",
    question: "体験セミナーで持参するものはありますか？",
    answer:
      "動きやすい服装と、必要に応じて飲み物・タオルをお持ちください。教材や道具はすべて校舎にてご用意します。",
  },
  {
    id: "admission-1",
    category: "admission",
    question: "未経験でも入学できますか？",
    answer:
      "はい、受講生の約70%が未経験者です。解剖学・運動学の基礎からお伝えしますので、安心してご入学ください。",
  },
  {
    id: "admission-2",
    category: "admission",
    question: "申し込みから受講開始までの流れは？",
    answer:
      "①無料体験セミナー受講 → ②コース選択・申込書記入 → ③受講料お支払い → ④受講開始、の3〜4ステップで進みます。最短で申込から1週間で受講開始できます。",
  },
  {
    id: "admission-3",
    category: "admission",
    question: "入学に必要な書類はありますか？",
    answer:
      "ご本人確認書類（運転免許証・保険証等）のみとなります。学歴・職歴等の証明書は不要です。",
  },
  {
    id: "fee-1",
    category: "fee",
    question: "入会金や教材費はかかりますか？",
    answer:
      "MGAでは入会金・教材費は一切いただいておりません。受講料に含まれる形ですので、追加費用なく安心して学べます。",
  },
  {
    id: "fee-2",
    category: "fee",
    question: "分割払いはできますか？",
    answer:
      "はい、提携クレジット会社による分割払いに対応しています。月々のお支払い目安はコースページの「月々の目安」をご参照ください。",
  },
  {
    id: "fee-3",
    category: "fee",
    question: "途中解約・返金はできますか？",
    answer:
      "やむを得ない事情がある場合、未受講分について規定に基づき返金対応いたします。詳細はご入学時にご案内します。",
  },
  {
    id: "class-1",
    category: "class",
    question: "授業時間と頻度はどのくらいですか？",
    answer:
      "1回あたり2〜3時間、週1〜2回ペースが目安です。お仕事や育児と両立しやすいスケジュールでお選びいただけます。",
  },
  {
    id: "class-2",
    category: "class",
    question: "他校舎での受講は可能ですか？",
    answer:
      "はい、5校舎いずれでも振替受講が可能です。出張や引越しの際にも継続して学べます。",
  },
  {
    id: "class-3",
    category: "class",
    question: "授業を欠席した場合の振替はありますか？",
    answer:
      "はい、欠席連絡をいただいた場合、同コースの別日程または他校舎での振替を無料でご用意しています。",
  },
];
