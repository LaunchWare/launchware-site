import React, { useEffect } from "react";

type PolicyProps = {
  policyKey?: string;
};

const termageddonAPIPath = "https://app.termageddon.com/api/policy/";

export function Policy({ policyKey }: PolicyProps) {
  useEffect(() => {
    const policy = document.getElementById("policy");
    if (policy === null || policyKey === undefined) {
      // eslint-disable-next-line no-console
      console.log("Error! Could not find policy element or policy key.");
    } else {
      // eslint-disable-next-line camelcase
      const pol_key = policyKey;
      // eslint-disable-next-line camelcase
      const pol_extra = policy.dataset.extra ? `?${  policy.dataset.extra}` : "";
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        policy.innerHTML = xhr.responseText;
      };

      xhr.onerror = function onError() {
        policy.innerHTML = "There has been an error loading this policy!";
      };

      // eslint-disable-next-line camelcase
      xhr.open("GET", termageddonAPIPath + pol_key + pol_extra);
      xhr.send();
    }
  }, [policyKey]);

  return (
    <div className="policy__container">
      <div
        className="policy__content"
        id="policy"
        data-extra="h-align=left&h-depth=3&table-style=accordion"
      />
    </div>
  );
}
