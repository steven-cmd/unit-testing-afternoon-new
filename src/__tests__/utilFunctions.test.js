import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./__data__/testData";

test("will not alter a string under 100 chars", () => {
  expect(shortenText(shortText)).toHaveLength(29);
});

test("shortens text over 100 chars and adds three dots", () => {
  const shortStuff = shortenText(longText);
  expect(shortStuff).not.toHaveLength(longText.length);
  expect(shortStuff.slice(-3)).toBe("...");
});

test("number of posts should equal 233", () => {
  expect(wordCount(posts)).toBe(233);
});

test("has a displayName", () => {
  expect(attachUserName(users, posts)[0]).toHaveProperty("displayName");
});

test("removes any post with no matching user", () => {
  expect(attachUserName(users, posts)).not.toContainEqual(posts[5]);
});
