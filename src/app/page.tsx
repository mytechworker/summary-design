// ** Component Imports
import Summary from "./(components)/cards/Summary";

// ** Data Imports
import summary_data from "@/data/data.json";

const maxScore = 100;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function transformSummaryData(
  data: typeof summary_data
): Promise<Array<ResultData>> {
  return data.map((item) => ({
    title: item.category,
    score: item.score,
    icon: item.icon,
    color: item.color,
    maxScore,
  }));
}

export default async function Home() {
  const summaryData = await transformSummaryData(summary_data);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <Summary results={summaryData} />
    </div>
  );
}
