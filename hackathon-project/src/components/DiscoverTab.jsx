import { useState } from "react";

const tabs = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DiscoverTab({ handleClick, tabs }) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-px flex justify-center gap-3" aria-label="Tabs">
            {" "}
            {/* Centering the tabs */}
            {tabs.map((tab) => (
              <a
                key={tab.name}
                onClick={(e) => handleClick(e)}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-purple-500"
                    : "border-transparent hover:text-purple-600 hover:border-purple-500",
                  "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium cursor-default"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
