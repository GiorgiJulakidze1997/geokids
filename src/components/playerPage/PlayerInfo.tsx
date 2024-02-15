import { List } from "antd";

const data = [
  "სისწრაფე(10 მ.)",
  "სისწრაფე(20 მ.)",
  "სისწრაფე(30 მ.)",
  "სისწრაფე(50 მ.)",
  "სისწრაფე(100 მ.)",
  "პენალტი (მარჯვ.)",
  "პენალტი (მარცხ.)",
  "დარტყმა( 16.5 მ (ცენტრი)) (ფეხი მარჯ.)",
  "დარტყმა( 16.5 მ (ცენტრი)) (ფეხი მარცხ.)",
  "დარტყმა( 16.5 მ (რკალი მარცხენა)) (ფეხი მარჯ.)",
  "დარტყმა( 16.5 მ (რკალი მარცხენა)) (ფეხი მარცხ.)",
  "დარტყმა( 16.5 მ (რკალი მარჯვენა)) (ფეხი მარჯ.)",
  "დარტყმა( 16.5 მ (რკალი მარჯვენა)) (ფეხი მარცხ.)",
  "ჟონგლირება (ფეხი მარჯ.)",
  "ჟონგლირება (ფეხი მარცხ.)",
  "ჟონგლირება (თავი)",
  "ჟონგლირება (მუხლი მარჯვ.)",
  "ჟონგლირება (მუხლი მარცხ.)",
];
const resultsData = [
    "3 წამი",
    "10 წამი",
    "30 წამი",
    "35 წამი",
    "40 წამი",
    "მარჯვენა ფეხი არუვარგა",
    "არც მარცხენა",
    "უნიჭოა არაფერი გამოვა",
    "უნიჭოა არაფერი გამოვა",
    "უნიჭოა არაფერი გამოვა",
    "უნიჭოა არაფერი გამოვა",
    "უნიჭოა არაფერი გამოვა",
    "უნიჭოა არაფერი გამოვა",
    "ნეიმარს შეშურდებოდა",
    "ნეიმარს შეშურდებოდა",
    "ნეიმარს შეშურდებოდა",
    "ნეიმარს შეშურდებოდა",
    "ნეიმარს შეშურდებოდა",
]
const PlayerInfo = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="min-h-[100vh] w-[80%] max-w-full bg-orange-200 mx-auto">
        <div className="border-b flex">
          <div className="border-r w-fit px-10 py-3 border-green-400">
            <img
              className="w-40 h-40 object-cover max-w-full object-center rounded-full"
              src="https://gazettengr.com/wp-content/uploads/Ronaldo.png"
              alt="ronaldu"
            />
          </div>
          <div className="w-[90%]">
            <div className="flex items-center gap-3 font-bold text-4xl justify-center pb-2">
              <h1>ჯოტია</h1>
              <h1>ცაავა</h1>
            </div>
            <div className="flex flex-col pl-5 gap-4 font-semibold text-lg">
              <div className="flex items-center gap-3">
                <h1>დღე: 18</h1>
                <h1>თვე: ივნისი</h1>
                <h1>წელი: 2002</h1>
              </div>
              <div className="flex items-center gap-3">
                <h1>სიმაღლე: 1.76</h1>
                <h1>წონა: 74კგ</h1>
                <h1>ფეხი: 49სმ</h1>
              </div>
              <div className="flex items-center gap-3">
                <h1>პოზიცია: სკამი</h1>
              </div>
            </div>
          </div>
        </div>
        {/* side panel */}
        <div className="flex">
          <div className="w-[50%] min-h-[80dvh]">
            <List
              size="large"
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
          <div className="w-full min-h-[80dvh]">
            <List
              size="large"
              bordered
              dataSource={resultsData}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
