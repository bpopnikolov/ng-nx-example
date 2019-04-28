module.exports = {
  name: "ng-nx-example",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/ng-nx-example/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
