


const faqData = [
  {
      question: "Do you offer discounted rates for groups or teams?",
      answer: "Yes, we offer special rates for groups of 5 or more. If you have a group of 5, 10, or 25, you can take advantage of our self-service Group Membership feature <span>here.</span>The feature will allow one user to make the payment via credit card, and then he or she can assign seats to the remaining users in the group.If you have more than 25 users, please contact plus@techcrunch.com to request a quote.For any other questions about group bundles, please contact our customer support team (plus@techcrunch.com)."
  },

  {
    question: "Do you offer discounts for non-profits, military, or goverment employees?",
    answer: "Yes – we offer discounts for non-profits, military, and government employees. If interested in the discount, please email our customer support team at plus@techcrunch.com. Be sure to include proof that you are part of the government, military, or non-profit organization. The discounted price is $50/year (plus tax)."

  },

  {
    question: "Do you offer student discounts?",
    answer: "Yes – we offer student discounts, but you’ll need to provide evidence that you are a student. Please email plus@techcrunch.com from your .edu email address to validate that you are a student, and our customer support team can provide a discount code. Students can get a full year of TechCrunch+ for $50. Disclaimer: We are not Crunch Fitness. This is not a gym membership"

  },

  {
    question: "Is it possible to gift a subscription to a family member or colleague?",
    answer: "Yes – it is possible. You can find our gifting feature here."

  },

  {
    question: "What can I expect from my trial period?",
    answer: "During your monthly trial, you will gain access to our archive of thousands of TechCrunch+ articles. We also produce over 100 new articles for members per month. The articles include investor surveys, private market analysis, advice on fundraising and growth, and tips to help build your team.Trial members get an experience on TechCrunch.com that’s free of banner ads and video pre-rolls. We’ll add you to our members-only newsletter, and you be able to use tools on the site like Rapid Read mode and List Builder.If you have questions about your trial benefits, please send an email to plus@techcrunch.com."

  },

  {
    question: "How do I get my 20% off event discount?",
    answer: "Annual or 2-year members enjoy a 20% off discount towards TechCrunch event tickets, along with access to member-only experiences at select events. Click here for a complete list of events.As an annual or 2-year subscriber, contact plus@techcrunch.com to request your event ticket discount code. Our team usually responds with the code within 24 hours. Some exclusions apply. Monthly members are not eligible for ticket discounts."

  },

  {
    question: "What countries or regions is a subscription available in?",
    answer: "Currently we have payments support in the US, Canada, Brazil, Mexico, Argentina, Australia, Israel, UK, and select countries in Europe. You can see a full list of countries and territories here. If you are interested in having TechCrunch+ in your area, you can submit a request here."

  },

  {
    question: "How do I upgrade my monthly plan to an annual plan?",
    answer: "Upgrading to an annual plan is a great way to save money in the long run. Go to Account, and you will see an “upgrade” button. Click the button. You can also reach out to our customer support team to perform an upgrade (plus@techcrunch.com)"

  },

  {
    question: "What is your cancellation and refund policy?",
    answer: "You may cancel your membership at anytime by logging in to TechCrunch.com and visiting Account to turn off automatic renewal. Charges are non-refundable and you will have subscription access until the end of the current subscription period."

  },

  {
    question: "What topics or categories of coverage are included in TechCrunch+?",
    answer: "Membership includes interviews with startup founders and VCs, investor surveys, public and private market analysis, and how-tos and interviews on fundraising, growth, monetization, and other work topics.See the latest articles and TechCrunch+ picks from our editors here."

  },

];


const faqsContainer = document.getElementById('faqs-container');

faqData.map(function(item) {

  let article = document.createElement('article');
  article.className= "faq-item";

  const markup = `
  <div class="question-container">
      <div class="item-question">
        <span class="question-text">${item.question}</span>
        <div class="plus-minus-container">
          <img src="images/plus-50.png" class="expand" alt="plus" title="plus">
          <img src="images/minus-30.png" class="close" alt="minus" title="minus">
        </div>
      </div>
    </div>
    <div class="item-answer">
      <span class="answer-text">${item.answer}</span>
    </div>
    `;

  article.innerHTML = markup;
  faqsContainer.append(article);


});


const PlusMinusContainer = document.querySelectorAll('.plus-minus-container');

PlusMinusContainer.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle('show-answer');
  })
})

const ItemQuestion = document.querySelectorAll('.question-text');

ItemQuestion.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle('show-answer');
  })
})

const QuestionContainer = document.querySelectorAll('.question-container');

QuestionContainer.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const parent = e.currentTarget.parentElement;
    parent.classList.toggle('show-answer');
  })
})