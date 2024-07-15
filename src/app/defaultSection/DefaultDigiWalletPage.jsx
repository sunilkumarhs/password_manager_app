import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DefaultDigiWalletPage = () => {
  return (
    <div className="w-full h-screen flex py-7 px-5 ">
      <Card className="w-[70%] h-full border-none shadow-none">
        <CardHeader className="px-32 pt-28">
          <CardTitle className="text-6xl font-bold text-orange-600">
            Secure Digital Wallet
          </CardTitle>
          <div className="py-2"></div>
          <CardContent className="text-lg ">
            Safeguard all your sensitive digital credentials in one centralized,
            easy-to-manage platform. Our secure wallet solution provides
            unparalleled protection for your most critical personal and
            financial data, empowering you to navigate the digital landscape
            with confidence.
          </CardContent>
        </CardHeader>
      </Card>
      <div className="px-2"></div>
      <Card className="w-[30%] h-full px-7 py-40 bg-yellow-400">
        <div className="shadow-2xl">
          <img
            src="https://cdn.gamma.app/4kehmpnpy0pozfy/860d6de9f6ca4314b6cd0de6dc321f09/original/cover.webp"
            alt="auditImage"
          />
        </div>
      </Card>
    </div>
  );
};

export default DefaultDigiWalletPage;
