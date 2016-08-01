import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('perf functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('perf main page shows up', function() {
  F('title').text('perf', 'Title is set');
});
