export { };

// これタプル型としてOK！ていうのは順序の約束までできるからね、もし(string | number)[]とすると順序がどうでもよくなってしまうんだ
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];
