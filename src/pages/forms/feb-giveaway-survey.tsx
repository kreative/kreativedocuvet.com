import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import { Widget } from "@typeform/embed-react";

export default function FebGiveawaySurvey() {
  return (
    <div>
      <NextSeo
        title="FREE LUNCH for your clinic! | February Giveaway"
        description="Enter to win FREE LUNCH for your clinic! We promise it'll only take 2 minutes and nothing more."
      />
      <Navbar />
      <Container>
        <div className="text-center pt-4 md:pt-8 pb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Enter to win FREE LUNCH for your clinic!
          </h1>
          <p className="text-lg md:text-xl text-neutrals-9 pt-3 pb-6">
            We promise it&apos;ll only take{" "}
            <span className="font-bold">60 seconds</span> and nothing more.
          </p>
          <div className="bg-gradient-to-r from-brand-forrest to-brand-deepocean p-1.5 rounded-[12px]">
            <div className="bg-white rounded-[10px]">
              <Widget
                id={"ozU35bax"}
                style={{ width: "100%", height: "60vh" }}
                inlineOnMobile={true}
              />
            </div>
          </div>
          <p className="text-md md:text-lg text-neutrals-8 py-6 italic">
            Please note, we have a limited number of lunches to give away and as a result have a cap of $150 for the total order.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
