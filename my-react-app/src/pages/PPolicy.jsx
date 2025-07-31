import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Privacy Policy for Dulce Tentaciones</h1>
      <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>Introduction</h2>
      <p>
        Dulce Tentaciones ("we," "our," or "us") operates the website [Your Website URL Here]. This Privacy Policy explains how we collect, use, and disclose information when you visit our website.
      </p>

      <h2>Information We Collect</h2>
      <h3>Usage Data</h3>
      <p>
        We may collect information on how the website is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. We collect this data to understand website traffic patterns, analyze user behavior, and improve our services.
      </p>
      <p>
        This data is typically collected through analytics tools (e.g., Google Analytics).
      </p>

      <h3>Newsletter Subscription</h3>
      <p>
        If you choose to sign up for our newsletter, we collect your email address. This information is used solely for sending you updates, promotions, and news related to Dulce Tentaciones. You can unsubscribe at any time.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use the collected data for various purposes:</p>
      <ul>
        <li>To monitor the usage of our website.</li>
        <li>To detect, prevent, and address technical issues.</li>
        <li>To analyze and improve our website's performance and user experience.</li>
        <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.</li>
      </ul>

      <h2>Disclosure Of Data</h2>
      <p>
        We may disclose your information where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement or to protect the security or integrity of our Service.
      </p>

      <h2>Security Of Data</h2>
      <p>
        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
      </p>

      <h2>Links To Other Sites</h2>
      <p>
        Our website may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
      </p>
      <p>
        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
      </p>

      <h2>Changes To This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      <p>
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul>
        <li>By email: ourdulcetentaciones@gmail.com</li>
        <li>By leaving a message the contact Page</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;