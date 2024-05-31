
import React, { useState } from "react";

import axios from "axios";

function Subscription() {
  const [subscription, setSubscription] = useState({
    name: "",
    email: "",
    product: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubscription({ ...subscription, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/subscriptions", subscription)
      .then((response) => alert("Subscription successful"))
      .catch((error) => console.error("Error subscribing:", error));
  };

  return (
    <div>
      <h1>Subscribe to Eco-Friendly Products</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={subscription.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={subscription.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="product"
          placeholder="Product"
          value={subscription.product}
          onChange={handleChange}
          required
        />

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscription;
