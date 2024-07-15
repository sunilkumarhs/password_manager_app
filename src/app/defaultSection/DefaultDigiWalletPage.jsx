import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DefaultDigiWalletPage = () => {
  return (
    <div className="w-full flex max-md:flex-col py-7 px-5 ">
      <Card className="w-[70%] max-md:w-full h-full border-none shadow-none">
        <CardHeader className="lg:px-24 md:px-10 sm:px-10 xl:px-28 lg:pt-28 sm:pt-20">
          <CardTitle className="sm:text-5xl text-3xl xl:text-6xl font-bold text-orange-600">
            Secure Digital Wallet
          </CardTitle>
          <div className="py-2"></div>
          <CardContent className="text-lg max-sm:text-sm ">
            Safeguard all your sensitive digital credentials in one centralized,
            easy-to-manage platform. Our secure wallet solution provides
            unparalleled protection for your most critical personal and
            financial data, empowering you to navigate the digital landscape
            with confidence.
          </CardContent>
        </CardHeader>
      </Card>
      <div className="px-2"></div>
      <Card className="w-[30%] max-md:w-full h-full px-7 max-md:py-5 py-40 bg-yellow-400">
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
