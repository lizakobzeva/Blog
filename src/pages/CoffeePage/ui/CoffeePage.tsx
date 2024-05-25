import Button from "shared/ui/Button";
import "./CoffeePage.scss";
import { useEffect, useState } from "react";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { LoginRegisterModal } from "features/AuthByEmail/ui";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import AddInLikedPostButton from "features/LikedPostOperations/ui/AddLikedPostButton/AddLikedPostButton";
const CoffeePage = () => {
  const [activeCoffeeId, setActiveCoffeeId] = useState("espresso");
  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  const [IsModal, setIsModal] = useState(false);
  const authData = useSelector(getAuthData);

  useEffect(() => {
    setIsModal(false);
  }, [user, authData]);
  const coffeeArray = [
    "espresso",
    "doppio",
    "macchiatto",
    "cortado",
    "cappuccino",
    "americano",
    "mocha",
    "latte",
    "breve",
    "mochabreve",
    "flatwhite",
    "bombon",
  ];
  return (
    <>
      <div className="CoffeePage">
        <section>
          <form className="coffee-form">
            {coffeeArray.map((coffee) => {
              return (
                <input
                  onClick={() => setActiveCoffeeId(coffee)}
                  type="radio"
                  name="coffeeType"
                  id={coffee}
                />
              );
            })}

            <div className="coffee-title">
              <nav className="coffee-labels">
                <label htmlFor="doppio">
                  <span>Doppio</span>
                  <p>
                    Doppio in espresso is a double shot, extracted using a
                    double coffee filter in the portafilter.
                  </p>
                </label>
                <label htmlFor="macchiatto">
                  <span>Macchiatto</span>
                  <p>
                    A caffè macchiato, sometimes called espresso macchiato, is
                    an espresso coffee drink with a small amount of milk added,
                    today usually foamed milk.
                  </p>
                </label>
                <label htmlFor="cortado">
                  <span>Cortado</span>
                  <p>
                    A cortado (from the Spanish verb "cortar" - to cut) is an
                    espresso cut with a small amount of warm milk.
                  </p>
                </label>
                <label htmlFor="cappuccino">
                  <span>Cappuccino</span>
                  <p>
                    A cappuccino (from the Capuchin friars) is an Italian coffee
                    drink which is traditionally prepared with espresso, hot
                    milk and steamed-milk foam.
                  </p>
                </label>
                <label htmlFor="americano">
                  <span>Americano</span>
                  <p>
                    A caffè americano is a style of coffee prepared by adding
                    hot water to espresso, giving it a similar strength to, but
                    different flavor from, regular drip coffee.
                  </p>
                </label>
                <label htmlFor="mocha">
                  <span>Mocha</span>
                  <p>
                    A caffè mocha is based on espresso and hot milk, but with
                    added chocolate, typically in the htmlForm of sweet cocoa
                    powder, although many varieties use chocolate syrup.
                  </p>
                </label>
                <label htmlFor="latte">
                  <span>Latte</span>
                  <p>
                    A caffè latte is a coffee drink made with espresso and
                    steamed milk. The term is Italian htmlFor "milk coffee."
                  </p>
                </label>
                <label htmlFor="breve">
                  <span>Breve</span>
                  <p>
                    A caffè breve is an American variation of a latte: a
                    milk-based espresso drink using steamed half-and-half
                    mixture of milk and cream instead of milk.
                  </p>
                </label>
                <label htmlFor="mochabreve">
                  <span>Mocha Breve</span>
                  <p>
                    A mocha breve is similar to a caffè breve with an added
                    ounce of cocoa powder or chocolate syrup.
                  </p>
                </label>
                <label htmlFor="flatwhite">
                  <span>Flat White</span>
                  <p>
                    A flat white is prepared by pouring microfoam (steamed milk
                    with small, fine bubbles and a glossy or velvety
                    consistency) over a single or double shot of espresso.
                  </p>
                </label>
                <label htmlFor="bombon">
                  <span>Café Bombón</span>
                  <p>
                    A café bombón is a popular Spanish coffee drink made with
                    espresso served with sweetened condensed milk in a 1:1
                    ratio.
                  </p>
                </label>
              </nav>
            </div>
            <a href="#" className="coffee-info" tabIndex={1}>
              <div className="coffee-recipe">
                <div className="recipe-foam">milk foam</div>
                <div className="recipe-steam">steamed milk</div>
                <div className="recipe-water">hot water</div>
                <div className="recipe-half">half &amp; half</div>
                <div className="recipe-chocolate">chocolate</div>
                <div className="recipe-crema"></div>
                <div className="recipe-espresso">espresso</div>
                <div className="recipe-condensed">condensed milk</div>
              </div>
              <div className="coffee-cup">
                <div className="coffee-steam">
                  <div className="steam"></div>
                  <div className="steam large"></div>
                  <div className="steam"></div>
                </div>
                <div className="coffee-ingredients">
                  <div className="ingredient-foam"></div>
                  <div className="ingredient-steam"></div>
                  <div className="ingredient-water"></div>
                  <div className="ingredient-half"></div>
                  <div className="ingredient-chocolate"></div>
                  <div className="ingredient-crema"></div>
                  <div className="ingredient-espresso"></div>
                  <div className="ingredient-condensed"></div>
                </div>
              </div>
            </a>
            <div className="info-overlay"></div>
            <div className="coffee-controls">
              <Button type="reset">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M6 12L11 7M6 12L11 17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Back
              </Button>
              {user ? (
                <AddInLikedPostButton coffeeId={activeCoffeeId} />
              ) : (
                <>
                  <Button type="button" onClick={() => setIsModal(true)}>
                    Add
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 1C0.447715 1 0 1.44772 0 2C0 2.55228 0.447715 3 1 3H3.20647L5.98522 14.9089C6.39883 16.6816 7.95486 17.9464 9.76471 17.9983V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.72686L4.97384 1.77277C4.86824 1.32018 4.46475 1 4 1H1ZM6.19353 7L7.9329 14.4545C8.14411 15.3596 8.95109 16 9.88058 16H17.5874C18.5618 16 19.3944 15.2978 19.5588 14.3373L20.8143 7H6.19353Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8 23C9.10457 23 10 22.1046 10 21C10 19.8954 9.10457 19 8 19C6.89543 19 6 19.8954 6 21C6 22.1046 6.89543 23 8 23Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19 23C20.1046 23 21 22.1046 21 21C21 19.8954 20.1046 19 19 19C17.8954 19 17 19.8954 17 21C17 22.1046 17.8954 23 19 23Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </>
              )}
            </div>
          </form>
        </section>
      </div>
      <LoginRegisterModal isOpend={IsModal} onClose={() => setIsModal(false)} />
    </>
  );
};

export default CoffeePage;
