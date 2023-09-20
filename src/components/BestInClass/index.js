import {BsTelephone, BsPerson} from 'react-icons/bs'
import {MdOutlineLocationOn} from 'react-icons/md'
import './index.css'

const BestInClass = () => (
  <>
    <div className="best-mobile">
      <div>
        <h1>
          <span className="head-span">Best in class</span> lab tests!
        </h1>
      </div>
      <div className="input-container">
        <p>Fill in the details to get a call</p>
        <form>
          <div>
            <BsPerson className="input-logo" />
            <input type="test" placeholder="Full name" className="input" />
          </div>
          <div>
            <BsTelephone className="input-logo" />
            <input type="test" placeholder="Phone number" className="input" />
          </div>
          <div>
            <MdOutlineLocationOn className="input-logo" />
            <input type="test" placeholder="Location" className="input" />
          </div>
          <input type="checkbox" id="checkbox" className="check" />
          <label htmlFor="checkbox">
            By continuing you agree to our <span className="terms"> T&C </span>
            and
            <span className="terms"> Privacy policy</span>
          </label>
          <br />
          <button type="submit" className="input-button">
            Proceed
          </button>
        </form>
      </div>
    </div>
    <div className="best-desktop">
      <div className="input-container">
        <p>Fill in the details to get a call</p>
        <form>
          <div>
            <BsPerson className="input-logo" />
            <input type="test" placeholder="Full name" className="input" />
          </div>
          <div>
            <BsTelephone className="input-logo" />
            <input type="test" placeholder="Phone number" className="input" />
          </div>
          <div>
            <MdOutlineLocationOn className="input-logo" />
            <input type="test" placeholder="Location" className="input" />
          </div>
          <input type="checkbox" id="checkbox" className="check" />
          <label htmlFor="checkbox">
            By continuing you agree to our <span className="terms"> T&C </span>
            and
            <span className="terms"> Privacy policy</span>
          </label>
          <br />
          <button type="submit" className="input-button">
            Proceed
          </button>
        </form>
      </div>
      <div className="photo-container">
        <h1>
          <span className="head-span">Best in class</span> lab tests!
        </h1>
        <div className="brief">
          <div className="brief-details-1">
            <img
              src="data:image/jpeg;base64,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"
              alt="brief"
              className="brief-image"
            />
            <p>Timely sample collection</p>
          </div>
          <div className="brief-details-2">
            <img
              src="data:image/jpeg;base64,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"
              alt="brief"
              className="brief-image"
            />
            <p>Complementary report consultation</p>
          </div>
          <div className="brief-details-3">
            <img
              src="data:image/jpeg;base64,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"
              alt="brief"
              className="brief-image"
            />
            <p>Accurate timely reports</p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default BestInClass
