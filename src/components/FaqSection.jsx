import React from "react";
import { Link } from "gatsby";

// Components
import FaqItem from "./FaqItem";

const FaqSection = () => {
  return (
    <div>
      <FaqItem question="What does 'Fumo' mean?">
        <p>
          The word "Fumo" comes from the Japanese onomatopoeia "モフモフ"
          (mofumofu), which means "soft to the touch", or "fluffy".
        </p>
      </FaqItem>
      <FaqItem question="Which characters have Fumos?">
        <p>
          Check out the colection <Link to="/fumos">Here</Link>. You can also
          look through the entire Gift catalog{" "}
          <a href="https://www.gift-gift.jp/nui/">here</a>.
        </p>
      </FaqItem>
      <FaqItem question="What are the varieties of Fumo?">
        <ul>
          <li>
            Normal: a normal fumo. Typically about 20cm tall sitting. Nendroid
            ones are taller and posable.
          </li>
          <li>Toy Strap: a small fumo with a strap for key chains.</li>
          <li>
            Deka - a giant fumo. 70cm tall and incredibly expensive. "Deka"
            comes from the Japanese "dekai", meaning huge.
          </li>
          <li>Puppet: a hand puppet, about 40cm tall.</li>
        </ul>
      </FaqItem>
      <FaqItem question="I've seen Fumos that aren't listed!">
        <p>
          That was most likely a custom fumo! There are quite a few people out
          there who make custom fumos themselves.
        </p>
      </FaqItem>
      <FaqItem question="How do i get a Fumo?">
        <p>
          You have two main options: find a trustworthy reseller at a reasonable
          price, or order one from Gift directly using a Proxy or Forwarding
          Service. You may need to use both, depending on the reseller.
        </p>
      </FaqItem>
      <FaqItem question="What do i need in order to get a fumo?">
        The same things you need for any opther online shopping:
        <ul>
          <li>
            A payment method: This means a credit or debut card. Gift itself
            does not accept paypal itself but many storefronts do.
          </li>
          <li>
            Money: expect to spend between 50 and 200 USD, depending on the
            Fumo, shipping costs, and source. Deka fumos range from $500 -
            $3000.
          </li>
          <li>Time - Shipping from overseas can take a long time.</li>
        </ul>
      </FaqItem>
      <FaqItem question="How good are bootleg Fumos?">
        <p>
          Bootleg fumos, mimicking the Fumo style and passed off as being
          authentic, are often cheaper than real ones. However, Some have their
          own character and value, like the long-legged bootleg dekas, but many
          do not. You'll have to decide on your own, but know that you're taking
          a risk. For information on avoiding bootlegs, see the reseller guide.
        </p>
      </FaqItem>
      <FaqItem question="Where can i find, meer, and/or discuss fumo with others?">
        <p>
          There are plenty of online communities for discussing and sharing our
          soft friends. /jp/ on 4chan regularly has fumo related threads.
          /r/fumofumo on reddit also is a nice place to post fumos, and there
          are several fumo-related Discord communities like Fumo Project:
          https://discord.gg/TyF7VKSwGZ.
        </p>
      </FaqItem>
      <FaqItem question="Fumo?">
        <p>Fumo.</p>
      </FaqItem>
    </div>
  );
};

export default FaqSection;