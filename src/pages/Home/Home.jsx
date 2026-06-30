import React from "react";
import { Container } from "../../sharedComponents/layout";
import Card from "../../sharedComponents/ui/Card";
import pizzaIngredientImage from "../../assets/pizza-ingredients.jpg";
import chefImage from "../../assets/chef.jpg";
import watchImage from "../../assets/watch.jpg";
import { HeroSection, ContentSection } from "../../sharedComponents/home";

export const Home = () => {
  const title = "Our story";

  return (
    <section className="">
      <Card className="max-w-5xl">
        {/* title */}
        <HeroSection title={title}>
          <HeroSection.Typography>
            We believe in good. We launched Fresh Pan Pizza Best Excuse Awards
            on our Facebook fan page. Fans were given situations where they had
            to come up with wacky and fun excuses. The person with the best
            excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their
            enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the
            Tastiest Pan Pizza. Ever!
          </HeroSection.Typography>
          <HeroSection.Typography>
            Ever since we launched the Tastiest Pan Pizza, ever, people have not
            been able to resist the softest, cheesiest, crunchiest, butteriest
            Domino's Fresh Pan Pizza. They have been leaving the stage in the
            middle of a performance and even finding excuses to be disqualified
            in a football match.
          </HeroSection.Typography>
          <HeroSection.Typography>
            We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
            page. Fans were given situations where they had to come up with
            wacky and fun excuses. The person with the best excuse won the Best
            Excuse Badge and won Domino's vouchers. Their enthusiastic response
            proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza.
            Ever!
          </HeroSection.Typography>
        </HeroSection>

        {/* content image 1*/}
        <ContentSection>
          <ContentSection.Image src={pizzaIngredientImage} />
          <ContentSection.Content>
            <ContentSection.Title>Ingredients</ContentSection.Title>

            <ContentSection.Description>
              We're ruthless about goodness. We have no qualms about tearing up
              a day-old lettuce leaf (straight from the farm), or steaming a
              baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir. Stir.
              While they're still young and fresh - that's our motto. It makes
              the kitchen a better place.
            </ContentSection.Description>
          </ContentSection.Content>
        </ContentSection>

        {/* content image2 */}
        <ContentSection reverse={true}>
          <ContentSection.Image src={chefImage} />
          <ContentSection.Content>
            <ContentSection.Title>Our Chefs</ContentSection.Title>

            <ContentSection.Description>
              They make sauces sing and salads dance. They create magic with
              skill, knowledge, passion, and stirring spoons (among other
              things). They make goodness so good, it doesn't know what to do
              with itself. We do though. We send it to you.
            </ContentSection.Description>
          </ContentSection.Content>
        </ContentSection>

        {/* timing */}

        <ContentSection>
          <ContentSection.Image
            className="w-36 h-36 hover:rotate-12 transition-all duration-200 "
            src={watchImage}
          />
          <ContentSection.Content>
            <ContentSection.Title>45 min delivery</ContentSection.Title>
          </ContentSection.Content>
        </ContentSection>
      </Card>
    </section>
  );
};
