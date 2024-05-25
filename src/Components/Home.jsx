import About from "./About";
import ChiefOfUnicef from "./ChiefOfUnicef";
import Work from "./Work";
import Partner from "./Partner";
const childRight = ['work1.jpeg','unicef_work3.jpg','unicef_work4.jpeg','unicef_work5.jpeg','unicef_work6.jpeg']
const  vcc = ['vacc2.jpeg','vacc3.jpeg','vacc4.jpeg','vacc2.jpeg','vacc3.jpeg','vacc4.jpeg'];
export default function Home() {
  return (
    <div>
      <About></About>
      <ChiefOfUnicef></ChiefOfUnicef>
      <Work images={childRight} vcc = {vcc}></Work>
      <Partner></Partner>
    </div>
  );
}
