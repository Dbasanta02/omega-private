import PageWrapper from '../../components/PageWrapper'
import ChartDemo from '../../components/ChartDemo'

export default function TradingPage() {
  return (
    <PageWrapper>
      <h2 className="text-2xl mb-4">Live Trading</h2>
      <ChartDemo />
    </PageWrapper>
  )
}
