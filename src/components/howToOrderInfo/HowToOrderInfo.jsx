import React from "react";
import "./howToOrderInfo.scss";

export const HowToOrderInfo = () => {
  return (
    <div className="howToOrderInfoWrapper">
      <div>
        <h1>Jak nakupovat</h1>
        <hr />
        <div className="howto-container">
          <span>
            Naše stránka funguje primárně jako portfolio produktů, které můžete
            poptat. Vámi poptané zboží zpracujeme do cenové nabídky a dohodneme
            platební metodu (týká se nových zákanzíků).
          </span>
        </div>
        <section
          className="section"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="section-heading">
            {" "}
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">
                <b>VÝBĚR ZBOŽÍ</b> - Vyhledejte produkt pomocí filtru kategorie
                / textem.
              </div>
            </div>
          </div>
          <p>
            <ul>
              <li>
                Zboží můžete vyhledávat na hlavní stránce pomocí filtru
                kategorie.
              </li>
              <li>
                Zboží můžete vyhledávat na hlavní stránce pomocí vyhledávání
                textem, kdy zadáte písmem výrobce, nebo název zboží.
              </li>
              <li>
                Po kliknutí na název zboží, se Vám ukáže detail s popisem a
                obrázkem produktu.
              </li>
              <li>
                Pokud nenajdete zboží, nebo budete mít problém s vyhledáváním
                tak nás kontaktujte pomocí tlačítka "CHAT", které vždy naleznete
                v pravém dolním rohu stránky.
              </li>
            </ul>
          </p>
        </section>

        <section
          className="section"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="section-heading">
            {" "}
            <div className="step">
              <div className="step-number step2">2</div>
              <div className="step-text">
                <b>PŘIDÁNÍ DO KOŠÍKU</b> - Zvolte počet kusů a přidejte zboží do
                košíku / textem.
              </div>
            </div>
          </div>
          <p>
            <ul>
              <li>
                Na nové stránce s detailem zboží zvolte pošet kusů kolik si
                přidáte zvolit. Počet kusů můžete průběžně upravit v detailu
                košíku. Pro úpravu počtu kusů v košíku klikněte na ikonu košíku
                v horním menu a následně klikněte na tlačítko "ZOBRAZIT KOŠÍK".
              </li>
              <li>
                Vybraný produkt, který si chcete u nás zakoupit, vložte do
                košíku pomocí tlačítka - „PŘIDAT DO KOŠÍKU”. V této chvíli ještě
                není nic závazné, poptávku můžete kdykoliv zrušit.
              </li>
            </ul>
          </p>
        </section>

        <section
          className="section"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="section-heading">
            {" "}
            <div className="step">
              <div className="step-number step3">3</div>
              <div className="step-text">
                <b>POTVRZENÍ KOŠÍKU</b> - Potvrďte zboží v košíku
              </div>
            </div>
          </div>
          <p>
            <ul>
              <li>
                Důkladně si překontrolujte Vámi vybrané položky a také jeho
                množství.
              </li>
              <li>
                Pokud chcete položku z košíku odebrat, klikněte na ikonu
                červeného koše nacházející se vpravo u řádku položky.
              </li>
              <li>
                Pokud chcete upravit počet kusů, tak používejte tlačítka + a -
                pro úpravu kusů.
              </li>
              <li>
                Klikněte na tlačítko "POTVRDIT KOŠÍK A VYPLNIT KONTAKTNÍ
                FORMULÁŘ"
              </li>
            </ul>
          </p>
        </section>

        <section
          className="section"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="section-heading">
            {" "}
            <div className="step">
              <div className="step-number step4">4</div>
              <div className="step-text">
                <b>VYPLŇTE FORMULÁŘ</b> - Zadejte své kontaktní údaje
              </div>
            </div>
          </div>
          <p>
            <ul>
              <li>
                Vyplňte prosím veškeré Vaše osobní informace do příslušného
                formuláře.
              </li>
              <li>K Vaší poptávce můžete také vložit komentář (nepovinné).</li>
              <li>
                Jsou -li všechna data v pořádku klikněte na tlačítko „ODESLAT
                POŽADAVEK NA CENOVOU NABÍDKU"
              </li>
              <li>
                Budeme Vás na základě Vašich kontaktních údaju neprodleně
                kontaktovat.
              </li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};
