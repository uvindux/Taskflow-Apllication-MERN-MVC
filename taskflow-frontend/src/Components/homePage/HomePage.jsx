import React from 'react'
import { CheckCircle, ListTodo, Zap, Shield, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
          const [formData, setFormData] = useState({ name: '', email: '', message: '' });

          const handleSubmit = (e) => {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    setFormData({ name: '', email: '', message: '' });
          };
          const navigate = useNavigate();
          return (
                    <>
                              <div className="landing-page">

                                        {/* Hero Section */}
                                        <section id="home" className="hero-section">
                                                  <div className="hero-container">
                                                            <h1 className="hero-title">
                                                                      Organize Your Life,<br />One Task at a Time
                                                            </h1>
                                                            <p className="hero-subtitle">
                                                                      The ultimate todo app to help you stay productive, focused, and in control of your daily goals.
                                                            </p>
                                                            <div className="hero-buttons">
                                                                      <button className="btn-primary btn-large" onClick={()=>{navigate("/todo")}}>Start for Free</button>
                                                                      <button className="btn-secondary btn-large" onClick={()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}} >Learn More</button>
                                                            </div>
                                                            <div className="hero-demo">
                                                                      <div className="demo-card">
                                                                                <div className="demo-content">
                                                                                          <div className="task-item task-completed">
                                                                                                    <CheckCircle className="task-icon" />
                                                                                                    <span>Complete project proposal</span>
                                                                                          </div>
                                                                                          <div className="task-item task-active">
                                                                                                    <ListTodo className="task-icon" />
                                                                                                    <span>Review team feedback</span>
                                                                                          </div>
                                                                                          <div className="task-item task-pending">
                                                                                                    <Clock className="task-icon" />
                                                                                                    <span>Schedule client meeting</span>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </section>

                                        {/* About Section */}
                                        <section id="about" className="about-section">
                                                  <div className="section-container">
                                                            <div className="section-header" id='about'>
                                                                      <h2 className="section-title">About TaskFlow</h2>
                                                                      <p className="section-subtitle">
                                                                                We believe productivity should be simple, intuitive, and accessible to everyone.
                                                                      </p>
                                                            </div>
                                                            <div className="about-content">
                                                                      <div className="about-text">
                                                                                <h3 className="about-heading">Our Mission</h3>
                                                                                <p className="about-paragraph">
                                                                                          TaskFlow was created to help individuals and teams streamline their workflow and achieve more with less stress. We combine powerful features with an elegant, user-friendly interface.
                                                                                </p>
                                                                                <p className="about-paragraph">
                                                                                          Whether you're managing personal tasks or coordinating with a team, TaskFlow adapts to your unique workflow and helps you stay organized.
                                                                                </p>
                                                                      </div>
                                                                      <div className="stats-grid">
                                                                                <div className="stat-card">
                                                                                          <div className="stat-number">50K+</div>
                                                                                          <div className="stat-label">Active Users</div>
                                                                                </div>
                                                                                <div className="stat-card">
                                                                                          <div className="stat-number">1M+</div>
                                                                                          <div className="stat-label">Tasks Completed</div>
                                                                                </div>
                                                                                <div className="stat-card">
                                                                                          <div className="stat-number">99.9%</div>
                                                                                          <div className="stat-label">Uptime</div>
                                                                                </div>
                                                                                <div className="stat-card">
                                                                                          <div className="stat-number">24/7</div>
                                                                                          <div className="stat-label">Support</div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </section>

                                        {/* Services Section */}
                                        <section id="services" className="services-section">
                                                  <div className="section-container">
                                                            <div className="section-header">
                                                                      <h2 className="section-title">Our Services</h2>
                                                                      <p className="section-subtitle">Everything you need to stay productive</p>
                                                            </div>
                                                            <div className="services-grid">
                                                                      <div className="service-card">
                                                                                <div className="service-icon">
                                                                                          <Zap size={32} />
                                                                                </div>
                                                                                <h3 className="service-title">Smart Prioritization</h3>
                                                                                <p className="service-description">
                                                                                          Automatically organize tasks by priority, deadline, and importance to focus on what matters most.
                                                                                </p>
                                                                      </div>
                                                                      <div className="service-card">
                                                                                <div className="service-icon">
                                                                                          <Shield size={32} />
                                                                                </div>
                                                                                <h3 className="service-title">Secure & Private</h3>
                                                                                <p className="service-description">
                                                                                          Your data is encrypted and protected with enterprise-grade security. We never share your information.
                                                                                </p>
                                                                      </div>
                                                                      <div className="service-card">
                                                                                <div className="service-icon">
                                                                                          <Clock size={32} />
                                                                                </div>
                                                                                <h3 className="service-title">Time Tracking</h3>
                                                                                <p className="service-description">
                                                                                          Monitor how long tasks take and improve your time management with detailed analytics.
                                                                                </p>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </section>

                                        {/* Contact Section */}
                                        <section id="contact" className="contact-section">
                                                  <div className="section-container">
                                                            <div className="section-header">
                                                                      <h2 className="section-title">Get In Touch</h2>
                                                                      <p className="section-subtitle">Have questions? We'd love to hear from you.</p>
                                                            </div>
                                                            <div className="contact-content">
                                                                      <div className="contact-form-wrapper">
                                                                                <div className="form-group">
                                                                                          <label className="form-label">Name</label>
                                                                                          <input
                                                                                                    type="text"
                                                                                                    value={formData.name}
                                                                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                                                    className="form-input"
                                                                                          />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                          <label className="form-label">Email</label>
                                                                                          <input
                                                                                                    type="email"
                                                                                                    value={formData.email}
                                                                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                                                                    className="form-input"
                                                                                          />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                          <label className="form-label">Message</label>
                                                                                          <textarea
                                                                                                    value={formData.message}
                                                                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                                                                    rows="4"
                                                                                                    className="form-textarea"
                                                                                          ></textarea>
                                                                                </div>
                                                                                <button onClick={handleSubmit} className="btn-primary btn-full">
                                                                                          Send Message
                                                                                </button>
                                                                      </div>
                                                                      <div className="contact-info">
                                                                                <div className="contact-item">
                                                                                          <div className="contact-icon">
                                                                                                    <Mail size={24} />
                                                                                          </div>
                                                                                          <div>
                                                                                                    <h4 className="contact-label">Email</h4>
                                                                                                    <p className="contact-text">support@taskflow.com</p>
                                                                                          </div>
                                                                                </div>
                                                                                <div className="contact-item">
                                                                                          <div className="contact-icon">
                                                                                                    <Phone size={24} />
                                                                                          </div>
                                                                                          <div>
                                                                                                    <h4 className="contact-label">Phone</h4>
                                                                                                    <p className="contact-text">+1 (555) 123-4567</p>
                                                                                          </div>
                                                                                </div>
                                                                                <div className="contact-item">
                                                                                          <div className="contact-icon">
                                                                                                    <MapPin size={24} />
                                                                                          </div>
                                                                                          <div>
                                                                                                    <h4 className="contact-label">Address</h4>
                                                                                                    <p className="contact-text">123 Productivity Lane<br />San Francisco, CA 94102</p>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </section>

                                        {/* Footer */}
                                        <footer className="footer">
                                                  <div className="footer-container">
                                                            <div className="footer-grid">
                                                                      <div className="footer-column">
                                                                                <div className="footer-logo">
                                                                                          <CheckCircle size={28} />
                                                                                          <span className="footer-brand">TaskFlow</span>
                                                                                </div>
                                                                                <p className="footer-text">Making productivity simple and effective for everyone.</p>
                                                                      </div>
                                                                      <div className="footer-column">
                                                                                <h4 className="footer-heading">Product</h4>
                                                                                <ul className="footer-links">
                                                                                          <li><a href="#" className="footer-link">Features</a></li>
                                                                                          <li><a href="#" className="footer-link">Pricing</a></li>
                                                                                          <li><a href="#" className="footer-link">Mobile App</a></li>
                                                                                </ul>
                                                                      </div>
                                                                      <div className="footer-column">
                                                                                <h4 className="footer-heading">Company</h4>
                                                                                <ul className="footer-links">
                                                                                          <li><a href="#about" className="footer-link">About Us</a></li>
                                                                                          <li><a href="#" className="footer-link">Careers</a></li>
                                                                                          <li><a href="#" className="footer-link">Blog</a></li>
                                                                                </ul>
                                                                      </div>
                                                                      <div className="footer-column">
                                                                                <h4 className="footer-heading">Support</h4>
                                                                                <ul className="footer-links">
                                                                                          <li><a href="#contact" className="footer-link">Contact</a></li>
                                                                                          <li><a href="#" className="footer-link">Help Center</a></li>
                                                                                          <li><a href="#" className="footer-link">Privacy Policy</a></li>
                                                                                </ul>
                                                                      </div>
                                                            </div>
                                                            <div className="footer-bottom">
                                                                      <p>&copy; 2024 TaskFlow. All rights reserved.</p>
                                                            </div>
                                                  </div>
                                        </footer>
                              </div>
                    </>
          )
}

export default HomePage
