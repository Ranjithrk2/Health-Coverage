import { useState } from 'react';

function MainPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    income: '',
    dependents: '',
  });

  const [cover, setCover] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const income = parseFloat(formData.income || 0);
    const dependents = parseInt(formData.dependents || 0);
    const suggestedCover = income * (dependents + 1) * 2;
    setCover(suggestedCover);
  };

  return (
    <div className="min-h-screen bg-[#004E98] text-white flex flex-col items-center justify-center p-4">
      <img src="/nicsan-logo.png" 
      alt="NICSAN Logo" 
      className="h-8 w-auto mb-4" />

      <h1 className="text-3xl font-bold mb-6">Health Cover Suggestion</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-2xl w-full max-w-md shadow-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded border"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 rounded border"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 rounded border"
          required
        />
        <input
          type="number"
          name="income"
          placeholder="Annual Income (₹)"
          value={formData.income}
          onChange={handleChange}
          className="w-full p-2 rounded border"
          required
        />
        <input
          type="number"
          name="dependents"
          placeholder="Number of Dependents"
          value={formData.dependents}
          onChange={handleChange}
          className="w-full p-2 rounded border"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#D7263D] text-white py-2 rounded hover:bg-red-700 transition-all"
        >
          Suggest Cover
        </button>
      </form>

      {cover && (
        <div className="bg-white text-black mt-6 p-6 rounded-xl w-full max-w-md text-center shadow-lg space-y-2">
          <h2 className="text-xl font-semibold">🎉 Your Suggested Cover</h2>
          <p className="text-2xl font-bold text-[#004E98]">₹{cover.toLocaleString()}</p>
          <p className="text-md">
            Monthly Premium: ₹{(0.009 * cover).toFixed(2)}
          </p>
          <button className="mt-4 w-full bg-[#25D366] text-white py-2 rounded text-lg font-semibold">
            WhatsApp Quote
          </button>
        </div>
      )}
    </div>
  );
}

export default MainPage;
