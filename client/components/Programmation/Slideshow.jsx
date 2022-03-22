import { useEffect, useState } from "react";
import styles from "./Slideshow.module.scss";

import Image from "next/image";
import Link from "next/link";

import moment from "moment";

import Arrow from "../../assets/icons/arrow.svg";

const Slideshow = ({ events }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const offset = {
    "--offset": selectedIndex * -100 + "%",
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      if (selectedIndex < events.slice(0, 3).length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else {
        setSelectedIndex(0);
      }
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [selectedIndex]);

  return (
    <>
      {events.length > 0 && (
        <div className={styles.container}>
          {events.length > 1 && (
            <>
              <Arrow
                onClick={() => {
                  if (selectedIndex !== 0) {
                    setSelectedIndex(selectedIndex - 1);
                  }
                }}
                className={`${styles.arrow} ${styles.leftArrow}`}
              />
              <Arrow
                onClick={() => {
                  if (selectedIndex < events.slice(0, 3).length - 1) {
                    setSelectedIndex(selectedIndex + 1);
                  } else {
                    setSelectedIndex(0);
                  }
                }}
                className={`${styles.arrow} ${styles.rightArrow}`}
              />
            </>
          )}
          {events.length > 1 && (
            <div className={styles.selectors}>
              {events.slice(0, 3).map((event, index) => {
                return (
                  <label
                    key={index}
                    htmlFor={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`${styles.radioControl} ${
                      selectedIndex === index && styles.checked
                    }`}
                  ></label>
                );
              })}
            </div>
          )}
          <div className={styles.slideshow}>
            {events.length > 1 && (
              <div className={styles.radios}>
                {events.slice(0, 3).map((event, index) => {
                  return (
                    <input
                      key={index}
                      type="radio"
                      name="slideshow"
                      id={index}
                      defaultChecked={index == 0 ? true : false}
                    />
                  );
                })}
              </div>
            )}
            {events[0] && (
              <Link href={`/event/${events[0].id}`}>
                <a className={`${styles.event} ${styles.first}`} style={offset}>
                  <div className={styles.imageContainer}>
                    <div className={styles.desktopImgContainer}>
                      <Image
                        unoptimized={true}
                        className={styles.desktopImg}
                        layout="fill"
                        src={`https://api.bdeluckyfox.fr${events[0].attributes.desktopImage.data.attributes.url}`}
                      />
                    </div>
                    <div className={styles.mobileImgContainer}>
                      <Image
                        unoptimized={true}
                        className={styles.mobileImg}
                        layout="fill"
                        src={`https://api.bdeluckyfox.fr${events[0].attributes.mobileImage.data.attributes.url}`}
                      />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <h3>{events[0].attributes.name}</h3>
                    <span>
                      {events[0].attributes.startDate ===
                      events[0].attributes.endDate
                        ? moment(events[0].attributes.startDate).format(
                            "DD MMMM"
                          )
                        : moment(events[0].attributes.startDate).format(
                            "MMMM"
                          ) ===
                          moment(events[0].attributes.endDate).format("MMMM")
                        ? `${moment(events[0].attributes.startDate).format(
                            "DD"
                          )} - ${moment(events[0].attributes.endDate).format(
                            "DD MMMM"
                          )}`
                        : `${moment(events[0].attributes.startDate).format(
                            "DD MMMM"
                          )} - ${moment(events[0].attributes.endDate).format(
                            "DD MMMM"
                          )}`}
                    </span>
                  </div>
                </a>
              </Link>
            )}
            {events.length > 1 &&
              events.slice(1, 3).map((event, index) => {
                return (
                  <Link href={`/event/${event.id}`} key={index}>
                    <div className={`${styles.event}`}>
                      <div className={styles.imageContainer}>
                        <div className={styles.desktopImgContainer}>
                          <Image
                            unoptimized={true}
                            className={styles.desktopImg}
                            layout="fill"
                            src={`https://api.bdeluckyfox.fr${event.attributes.desktopImage.data.attributes.url}`}
                          />
                        </div>
                        <div className={styles.mobileImgContainer}>
                          <Image
                            unoptimized={true}
                            className={styles.mobileImg}
                            layout="fill"
                            src={`https://api.bdeluckyfox.fr${event.attributes.mobileImage.data.attributes.url}`}
                          />
                        </div>
                      </div>
                      <div className={styles.content}>
                        <h3>{event.attributes.name}</h3>
                        <span>
                          {event.attributes.startDate ===
                          event.attributes.endDate
                            ? moment(event.attributes.startDate).format(
                                "DD MMMM"
                              )
                            : moment(event.attributes.startDate).format(
                                "MMMM"
                              ) ===
                              moment(event.attributes.endDate).format("MMMM")
                            ? `${moment(event.attributes.startDate).format(
                                "DD"
                              )} - ${moment(event.attributes.endDate).format(
                                "DD MMMM"
                              )}`
                            : `${moment(event.attributes.startDate).format(
                                "DD MMMM"
                              )} - ${moment(event.attributes.endDate).format(
                                "DD MMMM"
                              )}`}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Slideshow;
