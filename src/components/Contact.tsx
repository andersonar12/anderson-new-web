import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({ message: "", type: null });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: null });

    try {
      const form = event.target as HTMLFormElement;

      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        "service_hk0euc5", // Your service ID from EmailJS
        "template_s11b50a", // Your template ID
        form
      );

      if (result.text === "OK") {
        setStatus({
          message: "Your message has been sent successfully!",
          type: "success",
        });
        form.reset();
      }
    } catch (error) {
      setStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            If you have any questions or would like to discuss a possible collaboration, feel free
            to contact me.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address hvr-underline-from-left w-100 mb-3">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p className="mb-1">Zulia, Venezuela</p>
              </div>

              <a
                className="email hvr-underline-from-left w-100 mb-3"
                target="_blank"
                href="mailto:aromerocangri.14@gmail.com"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p className="mb-1">aromerocangri.14@gmail.com</p>
              </a>

              <a
                className="phone hvr-underline-from-left w-100 mb-3"
                href="https://wa.me/+584241835074?texto=Hello%20i%20am%20interested%20in%20working%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                <h4>Whatsapp:</h4>
                <p className="mb-1">+58 424 1835074</p>
              </a>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.908130672264!2d-71.403850685204!3d10.388470992608891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8a2a377a3a3a61%3A0x4e0d3a8a1a6a5a81!2sCabimas%2C+Zulia%2C+Venezuela!5e0!3m2!1sen!2sbg!4v1639943755621"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
                title="location-map"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="email-form w-100" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="from_name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="reply_to"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows={10} required></textarea>
              </div>

              {status.type && (
                <div
                  className={`alert ${
                    status.type === "success" ? "alert-success" : "alert-danger"
                  } mt-3`}
                >
                  {status.message}
                </div>
              )}

              <div className="text-center mt-3">
                <button type="submit" disabled={loading} className="btn btn-primary">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
