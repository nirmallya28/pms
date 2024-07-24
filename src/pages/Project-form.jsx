import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [formData, setFormData] = useState({
    project_name: '',
    launchDate: '',
    launchTime: '',
    status: '',
    expiryDate: '',
    expiryTime: '',
    projectDuration: '',
    description: '',
    requirements: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:3000/projectRoutes/createProject', formData);
      setResponseMessage(response.data.message || 'Form submitted successfully!');
      setErrorMessage('');
      setFormData({
        project_name: '',
        launchDate: '',
        launchTime: '',
        status: '',
        expiryDate: '',
        expiryTime: '',
        projectDuration: '',
        description: '',
        requirements: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error.response.data);
      setResponseMessage('');
      setErrorMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Project Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-4">
            <label htmlFor="project_name" className="block text-gray-700 font-bold mb-2">Project Name</label>
            <input
              type="text"
              id="project_name"
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="launchDate" className="block text-gray-700 font-bold mb-2">Launch Date</label>
            <input
              type="date"
              id="launchDate"
              name="launchDate"
              value={formData.launchDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="launchTime" className="block text-gray-700 font-bold mb-2">Launch Time</label>
            <input
              type="time"
              id="launchTime"
              name="launchTime"
              value={formData.launchTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            >
              <option value="">Select Status</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expiryTime" className="block text-gray-700 font-bold mb-2">Expiry Time</label>
            <input
              type="time"
              id="expiryTime"
              name="expiryTime"
              value={formData.expiryTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="projectDuration" className="block text-gray-700 font-bold mb-2">Project Duration</label>
            <input
              type="text"
              id="projectDuration"
              name="projectDuration"
              value={formData.projectDuration}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="requirements" className="block text-gray-700 font-bold mb-2">Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
      {responseMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          {responseMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default ProjectForm;
